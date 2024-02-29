import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

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
}

export default function Success({ customerName, products }: SuccessProps) {
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

				{products.length === 1 && (
					<p>
						Uhuul <strong>{customerName}</strong>, sua{' '}
						<strong>{products[0].name}</strong> já está a caminho da sua casa.
					</p>
				)}

				{products.length > 1 && (
					<p>
						Uhuul <strong>{customerName}</strong>, sua compra de{' '}
						{products.length} camisetas já está a caminho da sua casa.
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
				destination: '/',
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
	}

	if (!response) {
		return {
			notFound: true,
		}
	}

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
		},
	}
}
