/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'banner-bg': "url('/banner-bg.jpg')"
			},
			fontFamily: {
				'cabin': ['Cabin']
			},
		},
	},
	plugins: [],
}
