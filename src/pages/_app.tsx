import { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'

import brandImage from '../assets/brand.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<Header>
				<Link href="/">
					<Image
						src={brandImage}
						alt=""
						width={brandImage.width}
						height={brandImage.height}
					/>
				</Link>
			</Header>

			<Component {...pageProps} />
		</Container>
	)
}
