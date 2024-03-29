import 'swiper/css'
import 'swiper/css/scrollbar'

import { Bag } from '@phosphor-icons/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import Stripe from 'stripe'
import { Mousewheel, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Product as ProductType } from '@/@types/product'
import { stripe } from '@/lib/stripe'
import { HomeContainer, Product } from '@/styles/pages/home'

interface HomeProps {
	products: ProductType[]
}

export default function Home({ products }: HomeProps) {
	const urlParams = useSearchParams()
	const router = useRouter()

	useEffect(() => {
		const hasInvalidSessionId =
			urlParams.get('error') && urlParams.get('error') === 'invalid_session_id'

		const hasNotRetrieveSession =
			urlParams.get('error') && urlParams.get('error') === 'retrieve_session'

		if (hasInvalidSessionId) {
			toast.error('Sessão de checkout inválida.', {
				duration: 6000,
			})

			router.replace('/', undefined, { shallow: true })
		}

		if (hasNotRetrieveSession) {
			toast.error('Erro ao busca por sessão.', {
				duration: 6000,
			})

			router.replace('/', undefined, { shallow: true })
		}
	}, [urlParams, router])

	return (
		<>
			<Head>
				<title>Ignite Shop</title>
			</Head>

			<HomeContainer>
				<Swiper
					modules={[Scrollbar, Mousewheel]}
					slidesPerView="auto"
					spaceBetween={20}
					threshold={5}
					scrollbar={{ draggable: true }}
					mousewheel={{ forceToAxis: true }}
					breakpoints={{ 480: { spaceBetween: 30 }, 576: { spaceBetween: 45 } }}
				>
					{products.map((product) => (
						<SwiperSlide key={product.id}>
							<Product href={`/product/${product.id}`} prefetch={false}>
								<Image src={product.imageUrl} alt="" width={520} height={520} />

								<footer>
									<div>
										<strong>{product.name}</strong>
										<span>{product.price}</span>
									</div>

									<Bag />
								</footer>
							</Product>
						</SwiperSlide>
					))}
				</Swiper>
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
