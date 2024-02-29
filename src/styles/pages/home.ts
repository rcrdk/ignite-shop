import Link from 'next/link'

import { styled } from '..'

export const HomeContainer = styled('main', {
	width: '100%',
	overflow: 'hidden',

	'.swiper': {
		overflow: 'visible',
		width: '1180px',
		maxWidth: 'calc(100% - 4rem)',
		margin: '0 auto',
	},

	'.swiper-slide': {
		width: '41vw',

		'@media(max-width:991px)': {
			width: '58vw',
		},

		'@media(max-width:767px)': {
			width: '66vw',
		},

		'@media(max-width:575px)': {
			width: '81vw',
		},
	},

	'.swiper-scrollbar': {
		position: 'relative !important',
		inset: 'auto !important',
		marginTop: '2rem',
		width: '100% !important',
		height: '.75rem !important',
		background: '$gray700',

		'@media(max-width:575px)': {
			height: '.25rem !important',
		},
	},

	'.swiper-scrollbar-drag': {
		background: '$gray600',
		cursor: 'grab',
		// transition: 'all 300ms ease !important',

		'&:hover': {
			background: '$gray300',
		},

		'&:active': {
			background: '$green500',
		},
	},
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
	userSelect: 'none',

	'@media(max-width:575px)': {
		aspectRatio: '3/4',
	},

	img: {
		objectFit: 'contain',
		width: '100%',
		height: '100%',
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

		// '@media(hover:none)': {
		// 	opacity: 1,
		// 	transform: 'translateY(0)',
		// },

		'@media(max-width:575px)': {
			padding: '1.25rem 1.25rem 1.25rem 1.5rem',
		},

		'@media(max-width:479px)': {
			padding: '1rem 1rem 1rem 1.25rem',
		},

		strong: {
			display: 'block',
			fontSize: '$md',
			textWrap: 'pretty',
			color: '$gray100',

			'@media(max-width:575px)': {
				fontSize: '1rem',
			},
		},

		span: {
			display: 'block',
			marginTop: '.5rem',
			fontSize: '$lg',
			fontWeight: 'bold',
			color: '$green500',

			'@media(max-width:575px)': {
				fontSize: '$md',
			},
		},

		svg: {
			background: '$green500',
			color: '$white',
			width: '3rem',
			height: '3rem',
			padding: '0.5rem',
			borderRadius: 8,
			flexShrink: 0,
			marginLeft: '1.75rem',
			transition: 'background 300ms ease',

			'@media(max-width:575px)': {
				marginLeft: '1.25rem',
				width: '2.5rem',
				height: '2.5rem',
				padding: '0.35rem',
			},

			'&:hover': {
				background: '$green300',
			},

			'path, rect': {
				strokeWidth: 18,
			},
		},
	},

	'&:hover': {
		footer: {
			transform: 'translateY(0%)',
			opacity: 1,
		},
	},
})
