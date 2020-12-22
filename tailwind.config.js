const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      board: '-20px 20px 20px rgba(0,0,0,.5)',
      boardHover: '-50px 50px 50px rgba(0,0,0,.5)',
      layer: '-1px, 1px, 4px rgba(0,0,0,0.1)',
      inner: 'inset -10px 10px 9px 0 rgba(0, 0, 0, 0.2)',
      drop: 'filter: drop-shadow(0 0 30px #333);'
    },

    backdropFilter: {
      'none': 'none',
      'blur': 'blur(100px)',
    },

    extend: {
      colors: {
        background: '#c8a284',
        board: {
          top: '#c7a387',
          edgeDark: '#81593e',
          edgeLight: '#a0643e',
          line: '#6ab4d4'
        },
      },

      skew: { 
        '-45': '-45deg', 
      },

      rotate: { 
        '-60': '-60deg', 
      },

      hueRotate: { 
        8: '8deg', 
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
    require('tailwindcss-css-filters'),

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
