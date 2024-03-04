import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'

import { stripe } from '@/lib/stripe'
import {
	ImageContainer,
	ImageItem,
	SuccessButton,
	SuccessContainer,
} from '@/styles/pages/success'

interface SuccessProductsProps {
	id: string
	name: string
	imageURL: string
}

interface SuccessProps {
	customerName: string
	products: SuccessProductsProps[]
	productsQuantity: number
}

export default function Success({
	customerName,
	products,
	productsQuantity,
}: SuccessProps) {
	const { cartDetails, clearCart } = useShoppingCart()

	useEffect(() => {
		const hasCartProducts = Object.entries(cartDetails || {}).length !== 0

		if (hasCartProducts) clearCart()
	}, [cartDetails, clearCart])

	return (
		<>
			<Head>
				<title>Compra efetuada • Ignite Shop</title>
				<meta name="robots" content="noindex" />
			</Head>

			<SuccessContainer>
				<h1>Compra efetuada</h1>

				<ImageContainer>
					{products.map((thumbnail) => (
						<ImageItem key={thumbnail.id} title={thumbnail.name}>
							<Link
								href={`/product/${thumbnail.id}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={thumbnail.imageURL}
									width={320}
									height={320}
									alt={thumbnail.name}
								/>
							</Link>
						</ImageItem>
					))}
				</ImageContainer>

				{productsQuantity === 1 && (
					<p>
						Uhuul <strong>{customerName}</strong>, sua{' '}
						<strong>{products[0].name}</strong> já está a caminho da sua casa.
					</p>
				)}

				{productsQuantity > 1 && (
					<p>
						Uhuul <strong>{customerName}</strong>, sua compra de{' '}
						{productsQuantity} camisetas já está a caminho da sua casa.
					</p>
				)}

				<SuccessButton href="/">Voltar ao catálogo</SuccessButton>
			</SuccessContainer>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	let response = null
	const products: SuccessProductsProps[] = []
	const sessionID = String(query.session_id)

	if (!query.session_id) {
		return {
			// notFound: true,
			redirect: {
				destination: '/?error=invalid_session_id',
				permanent: false,
			},
		}
	}

	try {
		response = await stripe.checkout.sessions.retrieve(sessionID, {
			expand: ['line_items', 'line_items.data.price.product'],
		})
	} catch (error) {
		console.error(error)

		return {
			redirect: {
				destination: '/?error=retrieve_session',
				permanent: true,
			},
		}
	}

	if (!response) {
		return {
			notFound: true,
		}
	}

	const productsQuantity = response.line_items?.data.reduce(
		(previous, current) => {
			return previous + (current.quantity || 0)
		},
		0,
	)
	const customerName = response.customer_details?.name

	response.line_items?.data.map((item) => {
		const productByPrice = item.price?.product as Stripe.Product

		return products.push({
			id: productByPrice.id,
			name: productByPrice.name,
			imageURL: productByPrice.images[0],
		})
	})

	return {
		props: {
			customerName,
			products,
			productsQuantity,
		},
	}
}
