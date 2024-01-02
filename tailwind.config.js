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
        'extra': '#FFC436',
        'dark': 'rgb(23 37 84)',
      },
      boxShadow: {
        'soft': '0 5px 50px rgb(0, 67, 101, 8%)',
        'multiple': '0 5px 50px rgb(0, 67, 101, 8%), 0 2px 6px rgb(130, 169, 188, 8%) '
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

