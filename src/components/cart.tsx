import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { ReactNode, useEffect, useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

import { CartItem as CartItemType } from '@/@types/cart'
import { ButtonContainer } from '@/styles/components/button'
import {
	CartBody,
	CartContent,
	CartFooter,
	CartHeader,
	CartOverlay,
} from '@/styles/components/cart'

import CartItem from './cart-item'

interface CartProps {
	children: ReactNode
}

export default function Cart({ children }: CartProps) {
	const [cartItems, setCartItems] = useState<CartItemType[]>([])

	const {
		shouldDisplayCart,
		handleCartClick,
		cartDetails,
		cartCount,
		formattedTotalPrice,
	} = useShoppingCart()

	useEffect(() => {
		const items = Object.values(cartDetails || {})

		// @ts-expect-error wrong types
		setCartItems([...items])
	}, [cartDetails])

	return (
		<Dialog.Root open={shouldDisplayCart} onOpenChange={handleCartClick}>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>

			<Dialog.Portal>
				<CartOverlay />

				<CartContent>
					<CartHeader>
						<h5>Sacola de compras</h5>
						<Dialog.Close asChild>
							<button type="button">
								<X weight="bold" />
							</button>
						</Dialog.Close>
					</CartHeader>

					<CartBody>
						{cartItems.map((item) => (
							<CartItem product={item} key={item.id} />
						))}
					</CartBody>

					<CartFooter hidden={cartItems.length === 0}>
						<p>
							<span>Quantidade</span>
							<span>{cartCount && cartCount > 0 ? cartCount : 'Nenhum'}</span>
						</p>

						<p>
							<span>Total</span>
							<span>{formattedTotalPrice}</span>
						</p>

						<ButtonContainer type="button">Finalizar compra</ButtonContainer>
					</CartFooter>
				</CartContent>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
