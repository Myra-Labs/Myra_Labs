/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#402797',
          50: '#ebe7f7',
          100: '#d7cfef',
          200: '#b09fdf',
          300: '#886fcf',
          400: '#613fbf',
          500: '#402797', // Main color
          600: '#332079',
          700: '#26185b',
          800: '#19103d',
          900: '#0c081e',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#402797',
              '&:hover': {
                color: '#613fbf',
              },
            },
            code: {
              color: '#402797',
              '&::before': {
                content: '""',
              },
              '&::after': {
                content: '""',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};