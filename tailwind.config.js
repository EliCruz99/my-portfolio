const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': [...defaultTheme.fontFamily.sans],
        'press-start': ['"Press Start 2P"'],
        'rampart-one': ['"Rampart One"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
