import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Stripe from 'stripe'

import { Product as ProductType } from '@/@types/product'
import { stripe } from '@/lib/stripe'
import { HomeContainer, Product } from '@/styles/pages/home'

interface HomeProps {
	products: ProductType[]
}

export default function Home({ products }: HomeProps) {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 48,
		},
	})

	return (
		<>
			<Head>
				<title>Ignite Shop</title>
			</Head>

			<HomeContainer ref={sliderRef} className="keen-slider">
				{products.map((product) => (
					<Product
						href={`/product/${product.id}`}
						className="keen-slider__slide"
						key={product.id}
						prefetch={false}
					>
						<Image src={product.imageUrl} alt="" width={520} height={520} />

						<footer>
							<strong>{product.name}</strong>
							<span>{product.price}</span>
						</footer>
					</Product>
				))}
			</HomeContainer>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await stripe.products.list({
		expand: ['data.default_price'],
	})

	const products = response.data.map((product) => {
		const price = product.default_price as Stripe.Price
		const priceConverted = (price.unit_amount || 0) / 100
		const priceFormated = priceConverted.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		})

		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: priceFormated,
		}
	})

	return {
		props: {
			products,
		},
		revalidate: 60 * 60 * 2, // 2h
	}
}
