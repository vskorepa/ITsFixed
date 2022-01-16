module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#50D890',
                primaryLighter: '#6AF2AA',
                primaryDarker: '#37BF77',
                dark: '#272727',
                darkLighter: '#414141',
                darkDarker: '#1A1A1A',
                secondary: '#4F98CA',
                secondaryLighter: '#69B2E4',
                secondaryDarker: '#367FB1',
                light: '#f5f9f8',
                lightDarker: '#E8ECEB',
                sandy: '#E9C46A',
                flame: '#E76F51',
                brown: '#F4A261',
                warning: '#ff9966',
            },
            maxHeight: {
                '3/5': '60%',
                '4/5': '80%',
                '3/4': '75%',
                '5vh': '5vh',
                '10vh': '10vh',
                '20vh': '20vh',
                '30vh': '30vh',
                '40vh': '40vh',
                '45vh': '45vh',
                '50vh': '50vh',
                '60vh': '60vh',
                '75vh': '75vh',
                '80vh': '80vh',
                '85vh': '85vh',
            },
            height: {
                '2.5vh': '2.5vh',
                '5vh': '5vh',
                '7.5vh': '7.5vh',
                '10vh': '10vh',
                '20vh': '20vh',
                '30vh': '30vh',
                '40vh': '40vh',
                '49vh': '49vh',
                '50vh': '50vh',
                '60vh': '60vh',
                '75vh': '75vh',
                '80vh': '80vh',
                '85vh': '85vh',
            },
            minWidth: {
                '1/4': '25%',
                '1/3': '33%',
                '2/5': '40%',
                '30vw': '30vw',
                '35vw': '35vw',
                '40vw': '40vw',
                '45vw': '45vw',
                '50vw': '50vw',
                '90vw': '90vw',
                '100vw': '100vw',
            },
            maxWidth: {
                '1/4': '25%',
                '1/3': '33%',
                '2/5': '40%',
                '30vw': '30vw',
                '35vw': '35vw',
                '40vw': '40vw',
                '45vw': '45vw',
                '50vw': '50vw',
                '90vw': '90vw',
                '100vw': '100vw',
            },
            screens: {
                short: { raw: '(max-height: 1280px)' },
                // => @media (min-height: 800px) { ... }
            },
        },
    },

    variants: {
        extend: {
            brightness: ['hover'],
        },
    },
    plugins: [],
}
