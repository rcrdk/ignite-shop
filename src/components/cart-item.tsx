import { Minus, Plus, Trash } from '@phosphor-icons/react'
import Image from 'next/image'
import { useCallback } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

import { CartItem } from '@/@types/cart'
import {
	CartItemBody,
	CartItemContainer,
	CartItemImage,
	CartItemInfo,
	CartItemPlusMinusButton,
} from '@/styles/components/cart-item'

interface CartItemProps {
	product: CartItem
}

export default function CartItem({ product }: CartItemProps) {
	const { removeItem, incrementItem, decrementItem } = useShoppingCart()

	const handleRemoveItem = useCallback(() => {
		const dialogConfirmation = confirm(
			'Deseja mesmo remover este produto da sacola?',
		)

		if (dialogConfirmation) removeItem(product.id)
	}, [removeItem, product])

	return (
		<CartItemContainer>
			<CartItemImage>
				<Image
					src={product.image}
					width={320}
					height={320}
					alt={product.name}
				/>

				<button type="button" onClick={handleRemoveItem} title="Remover">
					<Trash weight="bold" />
				</button>
			</CartItemImage>

			<CartItemBody>
				<strong>{product.name}</strong>

				<div>
					<CartItemPlusMinusButton
						type="button"
						onClick={() => decrementItem(product.id)}
						disabled={product.quantity === 1}
						title="Diminuir quantidade"
					>
						<Minus weight="bold" />
					</CartItemPlusMinusButton>

					<CartItemInfo>{product.quantity}</CartItemInfo>

					<CartItemPlusMinusButton
						type="button"
						onClick={() => incrementItem(product.id)}
						disabled={product.quantity > 4}
						title="Aumentar quantidade"
					>
						<Plus weight="bold" />
					</CartItemPlusMinusButton>

					<span>|</span>

					<CartItemInfo>{product.formattedValue}</CartItemInfo>
				</div>
			</CartItemBody>
		</CartItemContainer>
	)
}
