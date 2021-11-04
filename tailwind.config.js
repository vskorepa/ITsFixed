module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#50D890",
                dark: "#272727",
                secondary: "#4F98CA",
                sandy: "#E9C46A",
                flame: "#E76F51",
                brown: "#F4A261",
                warning: "#ff9966",
            },
            maxHeight: {
                "3/5": "60%",
                "4/5": "80%",
                "3/4": "75%",
                "80vh": "80vh",
                "85vh": "85vh",
            },
            height: {
                "7.5vh": "7.5vh",
                "5vh": "5vh",
                "2.5vh": "2.5vh",
            },
            minWidth: {
                "30vw": "30vw",
                "35vw": "35vw",
                "40vw": "40vw",
                "45vw": "45vw",
                "50vw": "50vw",
                "90vw": "90vw",
                "100vw": "100vw",
            },
            width: {
                minWidth: {
                    "1/4": "25%",
                    "1/3": "33%",
                    "2/5": "40%",
                    "30vw": "30vw",
                    "35vw": "35vw",
                    "40vw": "40vw",
                    "45vw": "45vw",
                    "50vw": "50vw",
                    "90vw": "90vw",
                    "100vw": "100vw",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
