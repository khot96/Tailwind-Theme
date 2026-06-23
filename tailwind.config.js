const defaultColors = require('tailwindcss/colors')

module.exports = {
  prefix: 'twcss-',
  content: [
    './**/*.liquid',
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './assets/*.svg',
  ],
  theme: {
    screens: {
      sm: '320px',
      maxsm: { max: '749px' },
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
        inter: ['Inter', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
       backgroundImage: {
        'grid-pattern': 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
      },
    colors: {
        ...defaultColors,
        grey: {
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#9babb4',
          600: '#6b7280',
          700: '#4b5563',
        },

        'custom-yellow': {
          500: '#EDAE0A',
        },
      },
    },
  },
  plugins: [],
  // variants: {
  //   display: ['responsive'], // 'block' should be included by default
  // },
};
