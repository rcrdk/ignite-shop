import Image from 'next/image'
import { useRouter } from 'next/router'
import { Bag } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'

import { Brand, CartToggle, HeaderContainer } from '@/styles/components/header'

import brandImage from '../assets/brand.svg'
import Cart from './cart'

export function Header() {
	const { pathname } = useRouter()

	const { cartCount } = useShoppingCart()
	return (
		<HeaderContainer>
			<Brand href="/">
				<Image
					src={brandImage}
					alt=""
					width={brandImage.width}
					height={brandImage.height}
				/>
			</Brand>

			{!pathname.includes('success') && (
				<Cart>
					<CartToggle title="Sacola de compras">
						{cartCount && cartCount > 0 ? <span>{cartCount}</span> : ''}
						<Bag weight="bold" />
					</CartToggle>
				</Cart>
			)}
		</HeaderContainer>
	)
}
