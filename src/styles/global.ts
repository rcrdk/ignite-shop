import { globalCss } from '.'

export const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
	},

	':focus': {
		outline: 'none',
	},

	':focus-visible': {
		boxShadow:
			'0 0 0 2px var(--colors-gray900), 0 0 0 4px var(--colors-green500)',
	},

	body: {
		'-webkit-font-smoothing': 'antialiased',
		backgroundColor: '$gray900',
		color: '$gray100',

		'&[data-scroll-locked]': {
			userSelect: 'none',

			'[data-state="open"]': {
				userSelect: 'auto',
			},
		},
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

	// '@keyframes overlayShow': {
	// 	from: { opacity: '0' },
	// 	to: { opacity: '0.66' },
	// },

	// '@keyframes overlayHide': {
	// 	from: { opacity: '0.66' },
	// 	to: { opacity: '1' },
	// },

	// '@keyframes contentShow': {
	// 	from: {
	// 		opacity: '0',
	// 		transform: 'translate(100%, 0)',
	// 	},
	// 	to: {
	// 		opacity: '1',
	// 		transform: 'translate(0, 0)',
	// 	},
	// },
})
