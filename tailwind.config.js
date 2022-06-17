module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'biz-updgothic': ['"BIZ-UDPGothic"', 'sans-serif'],
                'paytone-one': ['"Paytone One"', 'sans-serif'],
                poppins: ['"Poppins"', 'sans-serif'],
                display: ['lato', 'sans-serif'],
            },
            colors: {
                primary: {
                    main: '#3B73AB',
                    dark: '#0b2642',
                },
                secondary: {
                    main: '#6f709a',
                },
                white: '#FFFFFF',
                gray: {
                    900: '#898A9D',
                    secondary: '#CAC9D7',
                    light: '#F8F8F8',
                },
            },
            borderRadius: {
                '2lg': '0.625rem',
            },
        },
    },
    plugins: [],
};
