import { AppProps } from 'next/app'
import Image from 'next/image'

import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'

import brandImage from '../assets/brand.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<Header>
				<Image
					src={brandImage}
					alt=""
					width={brandImage.width}
					height={brandImage.height}
				/>
			</Header>

			<Component {...pageProps} />
		</Container>
	)
}
