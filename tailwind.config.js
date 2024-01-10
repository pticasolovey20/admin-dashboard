/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],

	theme: {
		extend: {
			screens: {
				xs: '400px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				xxl: '1536px',
			},

			backgroundColor: {
				primary: 'var(--background-primary)',
				secondary: 'var(--background-secondary)',
				tertiary: 'var(--background-tertiary)',

				action: 'var(--background-action)',
			},

			textColor: {
				primary: 'var(--text-primary)',
				secondary: 'var(--text-secondary)',

				action: 'var(--text-action)',
			},
		},
	},

	plugins: [],
};
