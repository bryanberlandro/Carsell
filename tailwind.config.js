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
      },
      boxShadow: {
        'pageShadow': '0px -40px 50px #191D88'
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '30% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
}

