import Image from 'next/image'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'

import { CartItem } from '@/@types/cart'
import {
	CartItemBody,
	CartItemContainer,
	CartItemImage,
	CartItemPlusMinusButton,
} from '@/styles/components/cart-item'

interface CartItemProps {
	product: CartItem
}

export default function CartItem({ product }: CartItemProps) {
	const { removeItem, incrementItem, decrementItem } = useShoppingCart()

	return (
		<CartItemContainer>
			<CartItemImage>
				<Image
					src={product.image}
					width={320}
					height={320}
					alt={product.name}
				/>

				<button
					type="button"
					onClick={() => removeItem(product.id)}
					title="Remover"
				>
					<Trash weight="bold" />
				</button>
			</CartItemImage>

			<CartItemBody>
				<strong>{product.name}</strong>
				<p>
					{product.formattedPrice} • <span>{product.quantity} un.</span>
					<CartItemPlusMinusButton
						type="button"
						onClick={() => decrementItem(product.id)}
						disabled={product.quantity === 1}
						title="Diminuir quantidade"
					>
						<Minus weight="bold" />
					</CartItemPlusMinusButton>
					<CartItemPlusMinusButton
						type="button"
						onClick={() => incrementItem(product.id)}
						disabled={product.quantity > 4}
						title="Aumentar quantidade"
					>
						<Plus weight="bold" />
					</CartItemPlusMinusButton>
				</p>
			</CartItemBody>

			<p>{product.formattedValue}</p>
		</CartItemContainer>
	)
}
