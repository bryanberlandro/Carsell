/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'montserat': 'Montserrat, sans-serif',
        'Russo': 'Russo One, sans-serif'
      },
      colors: {
        'primary': '#191D88',
        'secondary': '#1450A3',
        'tertiary': '#337CCF',
        'extra': '#FFC436'
      }
    },
  },
  plugins: [],
}

