/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	daisyui: {
		themes: [
			{
				evenex: {

					"primary": "#F94E43",

					"secondary": "#E13833",

					"accent": "#F0F0F0",

					"neutral": "#101010",

					"base-100": "#FFFFFF",

					"info": "#3ABFF8",

					"success": "#5DBF7C",

					"warning": "#FBBD23",

					"error": "#F87272",
				},
			},
		],
	},
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
}
