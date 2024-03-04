import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'

import { Product, ProductCart } from '@/@types/product'
import { stripe } from '@/lib/stripe'
import { ButtonContainer } from '@/styles/components/button'
import {
	ImageContainer,
	ProductButton,
	ProductContainer,
	ProductDetails,
} from '@/styles/pages/product'

interface ProductProps {
	product: Product
	productCart: ProductCart
}

export default function Product({ product, productCart }: ProductProps) {
	const router = useRouter()

	const { handleCartClick, cartDetails } = useShoppingCart()

	const [isAddingProductToCart, setIsAddingProductToCart] = useState(false)

	const { addItem } = useShoppingCart()

	const handleAddProductToCart = () => {
		setIsAddingProductToCart(true)
		// @ts-expect-error conflit between package and app types
		addItem(productCart)

		handleCartClick()
		setIsAddingProductToCart(false)
	}

	const hasLimitCartItems =
		cartDetails && cartDetails[product.id]?.quantity >= 5

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

					<ProductButton>
						{hasLimitCartItems && (
							<small>Quantidade máxima de itens na sacola atingido.</small>
						)}

						<ButtonContainer
							type="button"
							onClick={handleAddProductToCart}
							disabled={isAddingProductToCart || hasLimitCartItems}
						>
							Adicionar à sacola
						</ButtonContainer>
					</ProductButton>
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
			productCart: {
				id: product.id,
				name: product.name,
				description: product.description,
				image: product.images[0],
				price: price.unit_amount,
				defaultPriceId: price.id,
				currency: price.currency,
			},
		},
		revalidate: 60 * 60 * 1, // 1h
	}
}
