const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito-sans)', ...fontFamily.sans]
      }
    },
    colors: {
      dark: {
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlue: 'hsl(207, 26%, 17%)'
      },
      light: {
        veryDarkBlue: 'hsl(200, 15%, 8%)',
        darkGrey: 'hsl(0, 0%, 52%)',
        veryLightGray: 'hsl(0, 0%, 98%)'
      },
      white: colors.white,
      black: colors.black,
      transparent: colors.transparent,
      inherit: colors.inherit
    }
  },
  darkMode: 'class',
  plugins: []
}
