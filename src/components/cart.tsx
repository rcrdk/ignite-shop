import { Bag, Broom, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { animated, config, useTransition } from 'react-spring'
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
	const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
		useState(false)

	const {
		shouldDisplayCart,
		handleCartClick,
		cartDetails,
		cartCount = 0,
		totalPrice = 0,
		clearCart,
	} = useShoppingCart()

	const transitions = useTransition(shouldDisplayCart, {
		from: { opacity: 0, x: 55 },
		enter: { opacity: 1, x: 0 },
		leave: { opacity: 0, x: 75 },
		config: config.stiff,
	})

	useEffect(() => {
		const items = Object.values(cartDetails || {})

		// @ts-expect-error wrong types
		setCartItems([...items])
	}, [cartDetails])

	const handleCartClear = useCallback(() => {
		const dialogConfirmation = confirm('Deseja mesmo esvaziar sua sacola?')

		if (dialogConfirmation) clearCart()
	}, [clearCart])

	async function handleBuyProducts() {
		try {
			setIsCreatingCheckoutSession(true)

			const response = await axios.post('/api/checkout', {
				cartDetails,
			})

			const { checkoutURL } = response.data

			window.location.href = checkoutURL
		} catch (err) {
			toast.error(
				'Ocorreu um erro ao tentar finalizar seu pedido. Tente novamente.',
				{
					duration: 6000,
				},
			)
			console.log(err)
			setIsCreatingCheckoutSession(false)
		}
	}

	const hasCartItens = cartItems.length > 0
	const hasNotCartItens = cartItems.length === 0

	return (
		<Dialog.Root open={shouldDisplayCart} onOpenChange={handleCartClick}>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>

			<Dialog.Portal>
				{transitions((styles, item) =>
					item ? (
						<>
							<CartOverlay forceMount asChild>
								<animated.div
									style={{
										opacity: styles.opacity,
									}}
								/>
							</CartOverlay>

							<CartContent forceMount asChild>
								<animated.div style={styles}>
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
											<Bag size={96} />
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
											<span>
												{cartCount === 1 ? '1 item' : `${cartCount} itens`}
											</span>
										</p>

										<p>
											<span>Total</span>
											<span>
												{(totalPrice / 100).toLocaleString('pt-BR', {
													style: 'currency',
													currency: 'BRL',
												})}
											</span>
										</p>

										<ButtonContainer
											type="button"
											disabled={hasNotCartItens || isCreatingCheckoutSession}
											onClick={handleBuyProducts}
										>
											Finalizar compra
										</ButtonContainer>
									</CartFooter>
								</animated.div>
							</CartContent>
						</>
					) : null,
				)}
			</Dialog.Portal>
		</Dialog.Root>
	)
}
