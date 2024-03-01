import { styled } from '..'

export const CartItemContainer = styled('div', {
	display: 'flex',
	gap: '1rem',
	alignItems: 'center',

	'&:not(:first-child)': {
		marginTop: '1.5rem',
	},
})

export const CartItemImage = styled('div', {
	borderRadius: 8,
	background: 'linear-gradient(180deg, #1ea843 0%, #7465d4 100%)',
	display: 'flex',
	alignSelf: 'flex-start',
	alignItems: 'center',
	flex: '0 0 5rem',
	position: 'relative',

	button: {
		position: 'absolute',
		inset: 'auto 0 100% auto',
		transform: 'translate(30%, 70%)',
		border: 0,
		background: '$gray600',
		color: '$gray700',
		borderRadius: '50%',
		fontSize: '$md',
		padding: '.25rem',
		boxShadow: '0 0 0 .3rem var(--colors-gray700)',

		svg: {
			display: 'block',
		},
	},

	img: {
		objectFit: 'contain',
		width: '100%',
		height: '100%',
	},
})

export const CartItemBody = styled('div', {
	flex: 1,

	strong: {
		display: 'block',
		fontSize: '$md',
		marginBottom: '0.5rem',
	},
})

export const CartItemPlusMinusButton = styled('button', {
	display: 'inline-block',

	svg: {
		display: 'block',
	},
})
