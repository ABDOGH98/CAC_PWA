module.exports = {
	purge: [],
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#042d3b",
				secondary: "#FFAA4C",
				third: "#5089C6",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
