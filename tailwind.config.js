module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '600px',
            md: '960px',
            lg: '1280px',
            xl: '1536px',
            '2xl': '1920',
        },
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
                    secondary: '#e0e7f2',
                    dark: '#0b2642',
                    light: '#a1bad4',
                    ultraLight: '#fafafd',
                },
                secondary: {
                    main: '#6f709a',
                    light: '#e9eff5',
                },
                danger: {
                    main: '#c53030',
                    light: '#fed7d7',
                    ultralight: '#f5eaea',
                    dark: '#b91c1c',
                },
                info: {
                    light: '#edf2f7',
                },
                white: '#FFFFFF',
                black: '#000000',
                gray: {
                    900: '#898A9D',
                    secondary: '#CAC9D7',
                    light: '#F8F8F8',
                },
                blue: {
                    primary: '#bfdbfe',
                },
                cyan: {
                    primary: '#a5f3fc',
                },
                green: {
                    primary: '#bbf7d0',
                },
                indigo: {
                    primary: '#c7d2fe',
                },
                orange: {
                    primary: '#fed7aa',
                    dark: '#c48b49',
                },
                purple: {
                    primary: '#e9d5ff',
                },
                red: {
                    primary: '#fecaca',
                },
            },
            borderRadius: {
                '2lg': '0.625rem',
            },
            width: {
                '1/8': '12.5%',
            },
            height: {
                inherit: 'inherit',
                '9/12': '75%',
            },
            translate: {
                '2-full': '200%',
            },
            borderWidth: {
                0.5: '0.5px',
                3: '3px',
            },
            dropShadow: {
                primary: [
                    '0 2px 2px rgba(59, 115, 171, 0.1)',
                    '0 1px 2px rgba(59, 115, 171, 0.1)',
                ],
            },
        },
    },
    plugins: [],
};
