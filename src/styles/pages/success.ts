import { styled } from '@stitches/react'
import Link from 'next/link'

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
})

export const SuccessButton = styled(Link, {
	marginTop: '5rem',
	display: 'block',
	color: '$green500',
	fontSize: '$lg',
	textDecoration: 'none',
	fontWeight: 'bold',
	'&:hover': {
		color: '$green300',
	},
})

export const ImageContainer = styled('div', {
	display: 'flex',
	margin: '4rem 0 2rem',

	'&:hover > *': {
		transform: 'translateX(-2rem)',
	},
})

export const ImageItem = styled('div', {
	width: '100%',
	maxWidth: '9rem',
	aspectRatio: '1',
	background: 'linear-gradient(180deg, #1ea843 0%, #7465d4 100%)',
	borderRadius: '50%',
	boxShadow: '0 0 3rem rgb(0 0 0 / 100%)',
	padding: '0.25rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	transition: 'transform 300ms ease',

	'&:not(:first-child)': {
		marginLeft: '-4rem',
	},

	'&:only-child': {
		transform: 'none !important',
	},

	'&:hover': {
		transform: 'translateX(0) !important',
	},

	'&:hover ~ *': {
		transform: 'translateX(2rem) !important',
	},

	a: {
		display: 'block',
	},

	img: {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
	},
})
