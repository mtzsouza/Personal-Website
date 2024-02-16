/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        madi: "'Ms Madi', cursive",
        bacasime: "'Bacasime Antique', serif",
        bubbler: "'Bubbler One', sans-serif"
      },
      animation: {
        bounce: 'bounce 2.5s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-4%)',
            animationTimingFunction: 'cubic-bezier(1,0,0.8,1)',
          }
        }
      }
    },
    colors: {
      ...colors,
      'tan-50': '#faf7f3',
      'tan-100': '#ede1d1',
      'tan-200': '#e4d2ba',
      'tan-300': '#dfcaae',
      'tan-400': '#d6bb97',
      'tan-500': '#d2b48c'
    }
  },
  plugins: []
};