import { styled } from '@stitches/react'

export const SuccessContainer = styled('main', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	margin: '0 auto',
	padding: '8vh 0',
	textAlign: 'center',

	h1: {
		fontSize: '$2xl',
		color: '$gray300',
	},

	p: {
		fontSize: '$xl',
		color: '$gray300',
		width: '100%',
		maxWidth: 560,
		textWrap: 'balance',
	},

	a: {
		marginTop: '5rem',
		display: 'block',
		color: '$green500',
		fontSize: '$lg',
		textDecoration: 'none',
		fontWeight: 'bold',
		'&:hover': {
			color: '$green300',
		},
	},
})

export const ImageContainer = styled('div', {
	width: '100%',
	maxWidth: '9rem',
	height: '10rem',
	background: 'linear-gradient(180deg, #1ea843 0%, #7465d4 100%)',
	borderRadius: 8,
	padding: '0.25rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: '4rem 0 2rem',

	img: {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
	},
})
