const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      board: '-20px 20px 20px rgba(0,0,0,.5)',
      boardHover: '-50px 50px 50px rgba(0,0,0,.5)',
      layer: '-1px, 1px, 4px rgba(0,0,0,0.1)',
    },
    extend: {
      skew: {
        '-45': '-45deg'
      },
      rotate: {
        '-60': '-60deg'
      },
      colors: {
        background: '#c8a284',
        board: {
          top: '#c7a387',
          edgeDark: '#81593e',
          edgeLight: '#a0643e',
        }
      },
    },
  },
  variants: {
    extend: {
      width: ['before', 'after'],
      height: ['before', 'after'],
      backgroundColor: ['before', 'after'],
      position: ['before', 'after'],
      inset: ['before', 'after'],
      transform: ['before', 'after'],
      skew: ['before', 'after'],

    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),

    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.empty-content': { content: "''"},
        },
        ['before', 'after']
      )
    }),
  ],
}
