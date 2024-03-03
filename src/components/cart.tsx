import { Broom, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

import { CartItem as CartItemType } from '@/@types/cart'
import { ButtonContainer } from '@/styles/components/button'
import {
	CartBody,
	CartClear,
	CartClose,
	CartContent,
	CartEmpty,
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
		cartCount = 0,
		formattedTotalPrice,
		clearCart,
	} = useShoppingCart()

	useEffect(() => {
		const items = Object.values(cartDetails || {})

		// @ts-expect-error wrong types
		setCartItems([...items])
	}, [cartDetails])

	const handleCartClear = useCallback(() => {
		const dialogConfirmation = confirm('Deseja mesmo esvaziar sua sacola?')

		if (dialogConfirmation) clearCart()
	}, [clearCart])

	const hasCartItens = cartItems.length > 0
	const hasNotCartItens = cartItems.length === 0

	return (
		<Dialog.Root open={shouldDisplayCart} onOpenChange={handleCartClick}>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>

			<Dialog.Portal>
				<CartOverlay />

				<CartContent>
					<CartHeader>
						<h5>Sacola de compras</h5>

						{cartCount > 0 && (
							<CartClear
								type="button"
								onClick={handleCartClear}
								title="Esvaziar sacola"
							>
								<Broom weight="bold" />
							</CartClear>
						)}

						<CartClose title="Fechar sacola" asChild>
							<button type="button">
								<X weight="bold" />
							</button>
						</CartClose>
					</CartHeader>

					{hasNotCartItens && (
						<CartEmpty>
							{/* <Bag size={96} /> */}
							<h5>Sua sacola está vazia</h5>
							<Dialog.Close asChild>
								<ButtonContainer type="button">
									Começe a comprar
								</ButtonContainer>
							</Dialog.Close>
						</CartEmpty>
					)}

					{hasCartItens && (
						<CartBody>
							{cartItems.map((item) => (
								<CartItem product={item} key={item.id} />
							))}
						</CartBody>
					)}

					<CartFooter hidden={cartItems.length === 0}>
						<p>
							<span>Quantidade</span>
							<span>{cartCount === 1 ? '1 item' : `${cartCount} itens`}</span>
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
