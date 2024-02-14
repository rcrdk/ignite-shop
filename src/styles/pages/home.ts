import { styled } from '..'

export const HomeContainer = styled('main', {
	display: 'flex',
	// gap: '3rem',
	width: '100%',
	maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
	minHeight: 656,
	marginLeft: 'auto',
})

export const Product = styled('a', {
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
		background: 'rgb(0 0 0 / 60%)',
		padding: '2rem',
		transform: 'translateY(110%)',
		opacity: 0,
		transition: 'all 200ms ease-in-out',

		strong: {
			fontSize: '$lg',
		},

		span: {
			fontSize: '$xl',
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
