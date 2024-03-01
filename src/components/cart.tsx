import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { ReactNode, useEffect, useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

import {
	CartBody,
	CartContent,
	CartFooter,
	CartHeader,
	CartOverlay,
} from '@/styles/components/cart'

interface CartItems {
	name: string
	id: string
	price: number
	image: string
	currency: string
	quantity: number
	value: number
	price_data: unknown
	product_data: unknown
	formattedValue: string
	formattedPrice: string
}

interface CartProps {
	children: ReactNode
}

export default function Cart({ children }: CartProps) {
	const [cartItems, setCartItems] = useState<CartItems[]>([])

	const {
		shouldDisplayCart,
		handleCartClick,
		cartDetails,
		cartCount,
		formattedTotalPrice,
		removeItem,
		incrementItem,
		decrementItem,
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
							<p key={item.id}>
								<Image
									src={item.image}
									width={320}
									height={320}
									alt={item.name}
								/>
								{item.name} ({item.quantity})
								<br />
								Unidade: {item.formattedPrice}
								Subtotal: {item.formattedValue}
								<br />
								<button type="button" onClick={() => removeItem(item.id)}>
									Remover
								</button>
								<button
									type="button"
									onClick={() => decrementItem(item.id)}
									disabled={item.quantity === 1}
								>
									Menos
								</button>
								<button
									type="button"
									onClick={() => incrementItem(item.id)}
									disabled={item.quantity > 4}
								>
									Mais
								</button>
								<br />
							</p>
						))}
					</CartBody>

					<CartFooter>
						<p>
							<span>Quantidade</span>
							<span>{cartCount && cartCount > 0 ? cartCount : 'Nenhum'}</span>
						</p>

						<p>
							<span>Total</span>
							<span>{formattedTotalPrice}</span>
						</p>

						<button type="button">Finalizar compra</button>
					</CartFooter>
				</CartContent>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
