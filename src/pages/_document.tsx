import { Head, Html, Main, NextScript } from 'next/document'

import { getCssText } from '@/styles'

export default function Document() {
	return (
		<Html lang="pt-br">
			<Head>
				{/* <meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/> */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<style
					id="stitches"
					dangerouslySetInnerHTML={{ __html: getCssText() }}
				/>
				<meta name="theme-color" content="#00B37E" />
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
