const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#c8a382',
        paleBrown: '#B28D70',
        board: {
          top: '#c7a389',
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

      backgroundImage: {
        'grid-svg': "url('../media/grid.svg')",
        'x-svg': "url('../media/xBlack.svg')",
        'o-svg': "url('../media/oWhite.svg')"
      },

      backgroundSize: {
        '8/10': '80%',
        '9/10': '90%',
        '48': '12rem'
      },

      boxShadow: {
        board: '-20px 20px 20px rgba(0,0,0,.5)',
        boardHover: '-50px 50px 50px rgba(0,0,0,.5)',
        layer: '-1px, 1px, 4px rgba(0,0,0,0.1)',
        inner: 'inset -10px 10px 9px 0 rgba(0, 0, 0, 0.2)',
        drop: 'filter: drop-shadow(0 0 30px #333)',
        neumorphism1: '-1px 1px 2px rgba(168, 136, 111, 0.2), 1px -1px 2px rgba(168, 136, 111, 0.2), -1px -1px 2px rgba(232, 188, 153, 0.9), 1px 1px 3px rgba(168, 136, 111, 0.9), inset 1px 1px 2px rgba(232, 188, 153, 0.3), inset -1px -1px 2px rgba(168, 136, 111, 0.5);',
        neumorphism2: 'inset -1px 1px 2px rgba(132, 104, 83, 0.2), inset 1px -1px 2px rgba(132, 104, 83, 0.2), inset -1px -1px 2px rgba(224, 178, 141, 0.9), inset 1px 1px 3px rgba(132, 104, 83, 0.9);',
      },
  
    },

    backdropFilter: {
      'none': 'none',
      'blur': 'blur(10px)',
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
    require('tailwindcss-filters'),

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
