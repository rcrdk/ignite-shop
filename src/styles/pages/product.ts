import { styled } from '..'

export const ProductContainer = styled('main', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	alignItems: 'stretch',
	gap: '4rem',
	width: 1180,
	maxWidth: '100%',
	margin: '0 auto',
})

export const ImageContainer = styled('div', {
	width: '100%',
	maxWidth: 576,
	height: 'calc(520px - 0.5rem)',
	background: 'linear-gradient(180deg, #1ea843 0%, #7465d4 100%)',
	borderRadius: 8,
	padding: '0.25rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	img: {
		objectFit: 'contain',
	},
})

export const ProductDetails = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	h1: {
		fontSize: '$2xl',
		color: '$gray300',
	},

	span: {
		marginTop: '1rem',
		fontSize: '$2xl',
		alignSelf: 'flex-start',
		color: '$green300',
	},

	p: {
		margin: '2.5rem 0',
		fontSize: '$md',
		lineHeight: '1.6',
		color: '$gray300',
	},

	button: {
		marginTop: 'auto',
		background: '$green500',
		border: 0,
		color: '$white',
		borderRadius: 8,
		padding: '1.25rem',
		cursor: 'pointer',
		fontWeight: 'bold',
		fontSize: '$md',
		'&:not(:disabled):hover': {
			background: '$green300',
		},
		'&:disabled': {
			opacity: '0.6',
			cursor: 'wait',
		},
	},
})
