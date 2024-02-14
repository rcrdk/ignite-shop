import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'
import { HomeContainer, Product } from '@/styles/pages/home'

interface Product {
	id: string
	name: string
	imageUrl: string
	price: number
}

interface HomeProps {
	products: Product[]
}

export default function Home({ products }: HomeProps) {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 48,
		},
	})

	return (
		<HomeContainer ref={sliderRef} className="keen-slider">
			{products.map((product) => (
				<Product
					href={`/product/${product.id}`}
					className="keen-slider__slide"
					key={product.id}
				>
					<Image src={product.imageUrl} alt="" width={520} height={520} />

					<footer>
						<strong>{product.name}</strong>
						<span>{product.price}</span>
					</footer>
				</Product>
			))}
		</HomeContainer>
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
