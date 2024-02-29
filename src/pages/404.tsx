import Head from 'next/head'
import Link from 'next/link'

import { NotFoundContainer } from '@/styles/pages/404'

export default function ErrorNotFound() {
	return (
		<>
			<Head>
				<title>Ignite Shop • Página não encontrada</title>
			</Head>

			<NotFoundContainer>
				<h1>Página não encontrada</h1>
				<Link href="/">Página inicial</Link>
			</NotFoundContainer>
		</>
	)
}
