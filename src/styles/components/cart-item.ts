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
		transform: 'translate3d(30%, 70%, 0)',
		border: 0,
		background: '$gray600',
		color: '$gray700',
		borderRadius: '50%',
		fontSize: '$md',
		padding: '.25rem',
		boxShadow: '0 0 0 .3rem var(--colors-gray700)',
		cursor: 'pointer',
		transition: 'background 300ms ease, box-shadow 200ms ease',

		svg: {
			display: 'block',
		},

		'&:hover': {
			background: '$gray300',
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
		textWrap: 'balance',
	},

	div: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',

		span: {
			display: 'block',
			margin: '0 0.75rem',
			color: '$gray600',
		},
	},
})

export const CartItemInfo = styled('p', {
	'&:nth-child(3)': {
		marginRight: '.25rem',
	},
})

export const CartItemPlusMinusButton = styled('button', {
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '1.25rem',
	height: '1.25rem',
	background: '$gray600',
	color: '$gray700',
	borderRadius: 50,
	border: 0,
	marginLeft: '.25rem',
	fontSize: '1rem',
	cursor: 'pointer',
	transition: 'background 300ms ease, box-shadow 200ms ease',

	svg: {
		display: 'block',
	},

	'&:not(:disabled):hover': {
		background: '$gray300',
	},

	'&:disabled': {
		opacity: '0.5',
		cursor: 'not-allowed',
	},
})
