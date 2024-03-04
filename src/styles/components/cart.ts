import { Content, DialogClose, Overlay } from '@radix-ui/react-dialog'
import { styled } from '@stitches/react'

export const CartOverlay = styled(Overlay, {
	position: 'fixed',
	inset: 0,
	zIndex: 99,
	// background: '$gray700',
	background: 'rgb(44 44 50 / 66%)',

	'@media(max-width:575px)': {
		opacity: '.75',
	},
})

export const CartContent = styled(Content, {
	display: 'flex',
	flexDirection: 'column',
	position: 'fixed',
	zIndex: 100,
	inset: '0 0 auto auto',
	height: '100%',
	width: 500,
	background: '$gray700',
	overflow: 'auto',
	boxShadow: '0 0 8rem rgb(0 0 0 / 66%)',

	':focus-visible': {
		boxShadow:
			'0 0 0 2px var(--colors-gray700), 0 0 0 4px var(--colors-green500)',
	},

	'@media(max-width:575px)': {
		borderRadius: '8px 8px 0 0',
		inset: '5rem 1rem 0 1rem',
		width: 'calc(100% - 2rem)',
		height: 'calc(100% - 5rem)',
	},
})

export const CartHeader = styled('header', {
	position: 'sticky',
	top: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: '.5rem',
	padding: '1.5rem',
	background: '$gray700',
	zIndex: 99,

	'@media(max-width:575px)': {
		padding: '1.25rem',
	},

	'&:before': {
		content: '',
		display: 'block',
		position: 'absolute',
		inset: '100% 0 auto 0',
		height: '1rem',
		background: 'linear-gradient(to bottom, $gray700, rgb(0 0 0 / 0%))',

		'@media(max-width:575px)': {
			height: '.75rem',
		},
	},

	h5: {
		flex: 1,
		fontSize: '$md',
		fontWeight: 'bold',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		'@media(max-width:575px)': {
			fontSize: '$lg',
		},
	},
})

export const CartClose = styled(DialogClose, {
	border: 0,
	background: 'none',
	fontSize: '$lg',
	color: '$gray600',
	cursor: 'pointer',
	transition: 'color 300ms ease, box-shadow 200ms ease',
	padding: '.25rem',
	borderRadius: 8,

	'&:hover': {
		color: '$gray500',
	},

	svg: {
		display: 'block',
	},
})

export const CartClear = styled('button', {
	padding: '.25rem',
	border: 0,
	background: 'none',
	fontSize: '$lg',
	color: '$gray600',
	cursor: 'pointer',
	transition: 'color 300ms ease, box-shadow 200ms ease',
	borderRadius: 8,

	'&:hover': {
		color: '$gray500',
	},

	svg: {
		display: 'block',
	},
})

export const CartFooter = styled('footer', {
	position: 'sticky',
	bottom: 0,
	padding: '1.5rem',
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	background: '$gray700',
	zIndex: 100,

	'@media(max-width:575px)': {
		gap: '.75rem',
		padding: '1.25rem',
	},

	'&:before': {
		content: '',
		display: 'block',
		position: 'absolute',
		inset: 'auto 0 100% 0',
		height: '1.5rem',
		background: 'linear-gradient(to top, $gray700, rgb(0 0 0 / 0%))',
	},

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

		'@media(max-width:575px)': {
			marginTop: 0,
		},
	},
})

export const CartBody = styled('div', {
	flex: 1,
	padding: '1.5rem',

	'@media(max-width:575px)': {
		padding: '1.25rem',
	},
})

export const CartEmpty = styled('div', {
	flex: 1,
	padding: '1.5rem',
	textAlign: 'center',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',

	'@media(max-width:575px)': {
		padding: '1.25rem',
	},

	svg: {
		color: '$gray600',
		opacity: '.5',
	},

	h5: {
		fontSize: '$xl',
		color: '$gray300',
		margin: '.25rem 0 1.25rem',
		textWrap: 'balance',
	},

	button: {
		width: '100%',
	},
})
