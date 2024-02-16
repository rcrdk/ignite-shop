import { globalCss } from '.'

export const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
	},

	body: {
		'-webkit-font-smoothing': 'antialiased',
		backgroundColor: '$gray900',
		color: '$gray100',
	},

	'body, input, textarea, button': {
		fontFamily: 'Roboto, sans-serif',
		fontWeight: 400,
	},

	'.skeleton': {
		color: 'transparent !important',
		pointerEvents: 'none',
		background: '$gray800 !important',
		borderRadius: 8,
		animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
	},

	'@keyframes pulse': {
		'0%, 100%': { opacity: 1 },
		'50%': { opacity: 0.5 },
	},
})
