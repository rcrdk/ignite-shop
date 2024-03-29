import { createStitches } from '@stitches/react'

export const {
	config,
	styled,
	globalCss,
	getCssText,
	keyframes,
	theme,
	createTheme,
	css,
} = createStitches({
	theme: {
		colors: {
			white: '#fff',
			gray900: '#121214',
			gray800: '#202024',
			gray700: '#2c2c32',
			gray600: '#8D8D99',
			gray300: '#c4c4cc',
			gray100: '#e1e1e6',

			green500: '#00875f',
			green300: '#00b37e',
		},
		fontSizes: {
			xs: '0.85rem',
			md: '1.125rem',
			lg: '1.25rem',
			xl: '1.5rem',
			'2xl': '2rem',
		},
	},
})
