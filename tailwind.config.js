const multipleLinesPlugin = require('tailwindcss-plugin-multiple-lines');

module.exports = {
  theme: {
    extend: {
      inset: {
        '-2': '-2rem',
        '2-6': '2.6rem'
      },
      colors: {
        covid: {
          100: '#DFDCE3',
          200: '#30415D',
          300: '#a3a686',
          400: '#efd9c8',
          500: '#CF6766',
          600: '#F19F4D',
          900: '#E9E7DA'
        }
      },
    },
    container: {

    },
  },
  variants: {},
  plugins: [
    multipleLinesPlugin(),
    require('@tailwindcss/custom-forms')
  ],
}

