/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#051650', // Extracted from Hero background
          light: '#0a268a',   // For button hover states
        },
      },
      animation: {
        'lava-1': 'lava-1 20s ease-in-out infinite',
        'lava-2': 'lava-2 25s ease-in-out infinite',
        'lava-3': 'lava-3 22s ease-in-out infinite',
        'reveal-up': 'reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'lava-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(10%, 10%) scale(1.1)' },
          '66%': { transform: 'translate(-5%, 15%) scale(0.9)' },
        },
        'lava-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-15%, -10%) scale(1.2)' },
          '66%': { transform: 'translate(10%, -20%) scale(0.8)' },
        },
        'lava-3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1.1)' },
          '50%': { transform: 'translate(-10%, 5%) scale(0.9)' },
        },
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      dropShadow: {
        'lg': '0 10px 15px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
  ],
}