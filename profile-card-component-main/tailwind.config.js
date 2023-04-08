/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        cyan: 'hsl(185, 75%, 39%)',
        darkBlue: 'hsl(229, 23%, 23%)',
        grayishBlue: 'hsl(227, 10%, 46%)',
        gray: 'hsl(0, 0%, 59%)'
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

