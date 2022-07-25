const colors = require('tailwindcss/colors')

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: { position: ['top', 'right'] },
    extend: {
      zIndex: {
        '-10': '-10',
      },
      fontFamily: {
        lato: ['lato', 'sans-serif'],
      },
      colors: {
        grape: colors.purple,
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-debug-screens'),
    require('tailwindcss-textshadow'),
  ],
}
