import { styled } from '..'

export const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	minHeight: '100vh',
	justifyContent: 'center',
	padding: '0 0 3rem',
})

export const Header = styled('header', {
	padding: '2rem 0',
	width: 1180,
	maxWidth: 'calc(100% - 4rem)',
	margin: '0 auto',
})
