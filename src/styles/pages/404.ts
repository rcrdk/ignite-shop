import { styled } from '..'

export const NotFoundContainer = styled('main', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	width: 1180,
	maxWidth: 'calc(100% - 4rem)',
	margin: '2rem auto 2rem',
	textAlign: 'center',
	flexGrow: 1,

	a: {
		marginTop: '1.25rem',
		background: '$green500',
		border: 0,
		color: '$white',
		borderRadius: 8,
		padding: '0.85rem 2rem',
		cursor: 'pointer',
		fontWeight: 'bold',
		fontSize: '$md',
		userSelect: 'none',
		transition: 'background 300ms ease',
		textDecoration: 'none',

		'&:hover': {
			background: '$green300',
		},
	},
})
