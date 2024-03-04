import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from 'use-shopping-cart'

import { Header } from '@/components/header'
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<CartProvider
				cartMode="checkout-session"
				stripe={process.env.STRIPE_PUBLIC_KEY as string}
				currency="BRL"
				shouldPersist
			>
				<Header />
				<Component {...pageProps} />
				<Toaster />
			</CartProvider>
		</Container>
	)
}
