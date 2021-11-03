module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#51ae32",
                dark: "#264653",
                sandy: "#E9C46A",
                flame: "#E76F51",
                brown: "#F4A261",
                warning: "#ff9966",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
