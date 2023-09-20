/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        madi: "'Ms Madi', serif",
        bacasime:"Bacasime Antique, serif"
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
    }
  },
  plugins: []
};