import { styled } from '..'

export const ButtonContainer = styled('button', {
	background: '$green500',
	border: 0,
	color: '$white',
	borderRadius: 8,
	padding: '1.25rem',
	cursor: 'pointer',
	fontWeight: 'bold',
	fontSize: '$md',
	userSelect: 'none',
	transition: 'background 300ms ease, box-shadow 200ms ease',

	'@media(max-width:575px)': {
		fontSize: '1rem',
		padding: '1rem 1.25rem',
	},

	'&:not(:disabled):hover': {
		background: '$green300',
	},

	'&:disabled': {
		opacity: '0.6',
		// cursor: 'wait',
	},
})
