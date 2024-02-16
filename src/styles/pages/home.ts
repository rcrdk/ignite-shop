import Link from 'next/link'

import { styled } from '..'

export const HomeContainer = styled('main', {
	display: 'flex',
	width: '100%',
	maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
	minHeight: 520,
	marginLeft: 'auto',
	borderRadius: '8px 0 0 8px',
})

export const Product = styled(Link, {
	background: 'linear-gradient(180deg, #1ea843 0%, #7465d4 100%)',
	borderRadius: 8,
	cursor: 'pointer',
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden',

	img: {
		objectFit: 'contain',
	},

	footer: {
		position: 'absolute',
		inset: 'auto 0.25rem 0.25rem',
		borderRadius: 6,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		background: 'rgb(0 0 0 / 75%)',
		padding: '1.75rem 2rem',
		transform: 'translateY(110%)',
		opacity: 0,
		transition: 'all 200ms ease-in-out',
		// backdropFilter: 'blur(3px)',

		strong: {
			fontSize: '$md',
			textWrap: 'pretty',
			color: '$gray100',
		},

		span: {
			fontSize: '$lg',
			fontWeight: 'bold',
			color: '$green500',
		},
	},

	'&:hover': {
		footer: {
			transform: 'translateY(0%)',
			opacity: 1,
		},
	},
})
