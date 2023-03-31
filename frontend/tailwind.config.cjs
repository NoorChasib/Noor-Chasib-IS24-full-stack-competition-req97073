/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"blue-500": "#003366",
        "blue-300": "#1A5A96",
				"blue-200": "#38598A",
				"gray-500": "#313132",
				"gray-300": "#606060",
				"gray-100": "#F2F2F2",
				"yellow-500": "#FCBA19",
				"red-500": "#D8292F",
				"green-500": "#2E8540",
			},
		},
		screens: {
			xs: "480px",
			sm: "768px",
			md: "1060px",
		},
	},
	plugins: [],
};
