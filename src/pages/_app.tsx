import { AppProps } from 'next/app'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Bag } from 'phosphor-react'

import { globalStyles } from '@/styles/global'
import { Brand, CartToggle, Container, Header } from '@/styles/pages/app'

import brandImage from '../assets/brand.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter()

	return (
		<Container>
			<Header>
				<Brand href="/">
					<Image
						src={brandImage}
						alt=""
						width={brandImage.width}
						height={brandImage.height}
					/>
				</Brand>

				{!pathname.includes('success') && (
					<CartToggle title="Sacola de compras">
						<span>1</span>
						<Bag weight="bold" />
					</CartToggle>
				)}
			</Header>

			<Component {...pageProps} />
		</Container>
	)
}
