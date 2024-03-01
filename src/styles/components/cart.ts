import { Content, Overlay } from '@radix-ui/react-dialog'
import { styled } from '@stitches/react'

export const CartOverlay = styled(Overlay, {
	position: 'fixed',
	inset: 0,
	zIndex: 99,
	background: '$gray900',
	opacity: '0.66',

	// '&[data-state="open"]': {
	// 	animation: 'overlayShow 500ms cubic-bezier(0.16, 1, 0.3, 1)',
	// },

	// '&[data-state="closed"]': {
	// 	animation: 'overlayHide 500ms cubic-bezier(0.16, 1, 0.3, 1)',
	// },
})

export const CartContent = styled(Content, {
	display: 'flex',
	flexDirection: 'column',
	position: 'fixed',
	zIndex: 100,
	inset: '0 0 auto auto',
	height: '100%',
	width: 500,
	maxWidth: '81vw',
	background: '$gray700',
	overflow: 'auto',
	boxShadow: '0 0 8rem rgb(0 0 0 / 66%)',
	// animation: 'contentShow 500ms cubic-bezier(0.16, 1, 0.3, 1);',
})

export const CartHeader = styled('header', {
	position: 'sticky',
	top: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '1.5rem',

	h5: {
		fontSize: '$md',
		fontWeight: 'bold',
	},

	button: {
		border: 0,
		background: 'none',
		fontSize: '$lg',
		color: '$gray600',
		cursor: 'pointer',
		transition: 'color 300ms ease',

		'&:hover': {
			color: '$gray500',
		},

		svg: {
			display: 'block',
		},
	},
})

export const CartFooter = styled('footer', {
	position: 'sticky',
	bottom: 0,
	padding: '1.5rem',
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',

	'&[hidden]': {
		display: 'none',
	},

	p: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		'&:nth-last-child(2)': {
			fontWeight: 'bold',
			fontSize: '$md',

			'span:last-child': {
				fontSize: '$lg',
			},
		},
	},

	button: {
		marginTop: '1.5rem',
	},
})

export const CartBody = styled('div', {
	flex: 1,
	padding: '1.5rem',
})
