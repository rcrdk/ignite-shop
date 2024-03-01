import { styled } from '..'

export const ProductContainer = styled('main', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	alignItems: 'stretch',
	gap: '4rem',
	width: '1180px',
	maxWidth: 'calc(100% - 4rem)',
	margin: '0 auto',

	'@media (max-width:991px)': {
		display: 'block',
	},
})

export const ImageContainer = styled('div', {
	width: '100%',
	height: '520px',
	background: 'linear-gradient(180deg, #1ea843 0%, #7465d4 100%)',
	borderRadius: 8,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	userSelect: 'none',

	'@media (max-width:991px)': {
		height: '400px',
	},

	'@media (max-width:575px)': {
		height: 'auto',
		aspectRatio: '3/4',
	},

	img: {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
	},
})

export const ProductDetails = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	'@media (max-width:991px)': {
		marginTop: '2.5rem',
	},

	'@media (max-width:575px)': {
		marginTop: '2rem',
	},

	h1: {
		fontSize: '$2xl',
		color: '$gray300',
		textWrap: 'balance',

		'@media (max-width:767px)': {
			fontSize: '$xl',
		},
	},

	span: {
		marginTop: '1rem',
		fontSize: '$2xl',
		alignSelf: 'flex-start',
		color: '$green300',

		'@media (max-width:767px)': {
			fontSize: '$xl',
		},
	},

	p: {
		margin: '2.5rem 0',
		fontSize: '$md',
		lineHeight: '1.6',
		color: '$gray300',

		'@media (max-width:767px)': {
			fontSize: '1rem',
		},

		'@media (max-width:575px)': {
			margin: '2rem 0',
		},
	},
})

export const ProductButton = styled('div', {
	marginTop: 'auto',
	display: 'flex',
	flexDirection: 'column',

	small: {
		display: 'block',
		textAlign: 'center',
		fontSize: '1rem',
		fontStyle: 'italic',
		border: '1px solid $gray700',
		borderRadius: 8,
		padding: '1rem',
		color: '$gray600',
		marginBottom: '1rem',
	},

	button: {
		background: '$green500',
		border: 0,
		color: '$white',
		borderRadius: 8,
		padding: '1.25rem',
		cursor: 'pointer',
		fontWeight: 'bold',
		fontSize: '$md',
		userSelect: 'none',
		transition: 'background 300ms ease',

		'&:not(:disabled):hover': {
			background: '$green300',
		},

		'&:disabled': {
			opacity: '0.6',
			cursor: 'wait',
		},
	},
})
