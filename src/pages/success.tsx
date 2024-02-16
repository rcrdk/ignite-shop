import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'
import { ImageContainer, SuccessContainer } from '@/styles/pages/success'

interface SuccessProps {
	customerName: string
	product: {
		name: string
		imageURL: string
	}
}

export default function Success({ customerName, product }: SuccessProps) {
	return (
		<>
			<Head>
				<title>Compra efetuada • Ignite Shop</title>
				<meta name="robots" content="noindex" />
			</Head>

			<SuccessContainer>
				<h1>Compra efetuada</h1>

				<ImageContainer>
					<Image
						src={product.imageURL}
						width={320}
						height={320}
						alt={product.name}
					/>
				</ImageContainer>

				<p>
					Uhuul <strong>{customerName}</strong>, sua{' '}
					<strong>{product.name}</strong> já está a caminho da sua casa.
				</p>

				<Link href="/">Voltar ao catálogo</Link>
			</SuccessContainer>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
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

	const response = await stripe.checkout.sessions.retrieve(sessionID, {
		expand: ['line_items', 'line_items.data.price.product'],
	})

	const customerName = response.customer_details?.name
	const product = response.line_items?.data[0].price?.product as Stripe.Product

	return {
		props: {
			customerName,
			product: {
				name: product.name,
				imageURL: product.images[0],
			},
		},
	}
}
