import Link from 'next/link'

import { styled } from '..'

export const HeaderContainer = styled('header', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '2rem 0',
	width: 1180,
	maxWidth: 'calc(100% - 4rem)',
	margin: '0 auto',
	userSelect: 'none',
})

export const Brand = styled(Link, {
	display: 'block',
	borderRadius: 8,
	transition: 'box-shadow 200ms ease',

	'@media(max-width:575px)': {
		width: 110,
	},

	'&:only-child': {
		margin: 'auto',
	},

	img: {
		maxWidth: '100%',
		height: 'auto',
	},
})

export const CartToggle = styled('button', {
	position: 'relative',
	background: '$gray800',
	color: '$gray600',
	border: 0,
	borderRadius: 8,
	cursor: 'pointer',
	transition: 'background 300ms ease, box-shadow 200ms ease',

	'&:hover': {
		background: '$gray700',
	},

	'&:has(span)': {
		color: '$gray300',
	},

	svg: {
		display: 'block',
		width: '3.25rem',
		height: '3.25rem',
		padding: '0.66rem',

		'@media(max-width:575px)': {
			width: '3rem',
			height: '3rem',
			padding: '0.5rem',
		},
	},

	span: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		inset: 'auto auto 100% 100%',
		transform: 'translate(-66%, 66%)',
		fontWeight: 'bold',
		background: '$green500',
		color: '$white',
		lineHeight: '1',
		width: '1.4rem',
		height: '1.4rem',
		borderRadius: '1.5rem',
		boxShadow: '0 0 0 .25rem var(--colors-gray900)',
	},
})
