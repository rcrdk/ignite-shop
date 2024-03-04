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
	flex: '0 0 4.5rem',
	position: 'relative',

	'@media(max-width:575px)': {
		flex: '0 0 4rem',
	},

	button: {
		position: 'absolute',
		inset: 'auto 0 100% auto',
		transform: 'translate3d(30%, 70%, 0)',
		border: 0,
		background: '$gray700',
		color: '$gray600',
		borderRadius: '50%',
		fontSize: '$md',
		padding: '.25rem',
		boxShadow: '0 0 0 .15rem var(--colors-gray700)',
		cursor: 'pointer',
		transition: 'color 300ms ease, box-shadow 200ms ease',

		svg: {
			display: 'block',
		},

		'&:focus-visible': {
			boxShadow:
				'0 0 0 2px var(--colors-gray700), 0 0 0 4px var(--colors-green500), 0 0 0 6px var(--colors-gray700)',
		},

		'&:hover': {
			color: '$gray300',
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

		'@media(max-width:575px)': {
			fontSize: '1rem',
		},
	},

	div: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',

		// '@media(max-width:575px)': {
		// 	fontSize: '$xs',
		// },

		span: {
			display: 'block',
			margin: '0 0.75rem',
			color: '$gray600',
			opacity: '.5',
		},
	},
})

export const CartItemInfo = styled('p', {
	opacity: '.75',

	'&:nth-child(2)': {
		margin: '0 .25rem',
	},
})

export const CartItemPlusMinusButton = styled('button', {
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '1.25rem',
	height: '1.25rem',
	borderRadius: 50,
	color: '$green500',
	background: 'none',
	border: 0,
	fontSize: '1rem',
	cursor: 'pointer',
	transition: 'background 300ms ease, box-shadow 200ms ease',

	svg: {
		display: 'block',
	},

	'&:not(:disabled):hover': {
		color: '$green300',
	},

	'&:disabled': {
		color: '$gray300',
		opacity: '0.25',
		cursor: 'not-allowed',
	},
})
