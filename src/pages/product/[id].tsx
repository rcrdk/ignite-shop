import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Stripe from 'stripe'

import { Product } from '@/@types/product'
import { stripe } from '@/lib/stripe'
import {
	ImageContainer,
	ProductContainer,
	ProductDetails,
} from '@/styles/pages/product'

interface ProductProps {
	product: Product
}

export default function Product({ product }: ProductProps) {
	const router = useRouter()

	const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
		useState(false)

	async function handleBuyProduct() {
		try {
			setIsCreatingCheckoutSession(true)

			const response = await axios.post('/api/checkout', {
				priceID: product?.defaultPriceId,
			})

			const { checkoutURL } = response.data

			window.location.href = checkoutURL
		} catch (err) {
			// Conectar com uma ferramenta de observalidade > Sentry / Datalog
			alert('Falha ao direcionar para o checkout.')
			setIsCreatingCheckoutSession(false)
		}
	}

	if (router.isFallback) {
		return (
			<ProductContainer>
				<ImageContainer className="skeleton" />

				<ProductDetails>
					<h1 className="skeleton">Carregando...</h1>
					<span className="skeleton">Carregando...</span>
					<p className="skeleton">Carregando...</p>

					<button type="button" className="skeleton" disabled>
						Carregando...
					</button>
				</ProductDetails>
			</ProductContainer>
		)
	}

	return (
		<>
			<Head>
				<title>{product.name} • Ignite Shop</title>
			</Head>

			<ProductContainer>
				<ImageContainer>
					<Image src={product.imageUrl} width={520} height={520} alt="" />
				</ImageContainer>

				<ProductDetails>
					<h1>{product.name}</h1>
					<span>{product.price}</span>
					{product.description && <p>{product.description}</p>}

					<button
						type="button"
						onClick={handleBuyProduct}
						disabled={isCreatingCheckoutSession}
					>
						Colocar na sacola
					</button>
				</ProductDetails>
			</ProductContainer>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { id: 'prod_PYp9pNDKgyFzXB' } }],
		fallback: 'blocking',
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
	params,
}) => {
	let product = null
	const productId = params?.id || ''

	try {
		product = await stripe.products.retrieve(productId, {
			expand: ['default_price'],
		})
	} catch (error) {
		console.error(error)
	}

	if (!product) {
		return {
			notFound: true,
		}
	}

	const price = product.default_price as Stripe.Price
	const priceConverted = (price.unit_amount || 0) / 100
	const priceFormated = priceConverted.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	})

	return {
		props: {
			product: {
				id: product.id,
				name: product.name,
				description: product.description,
				imageUrl: product.images[0],
				price: priceFormated,
				defaultPriceId: price.id,
			},
		},
		revalidate: 60 * 60 * 1, // 1h
	}
}
