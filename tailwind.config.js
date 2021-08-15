module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "mainBackground": "url('/src/Portfolio-background-img.jpg')"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
