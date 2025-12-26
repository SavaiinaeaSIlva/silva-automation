/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#051650', // Brand Blue
      },
      keyframes: {
        // CONTENT ENTRANCE
        revealUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // BACKGROUND ANIMATIONS
        'lava-move-1': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(50%, -20%) scale(1.2)' },
          '100%': { transform: 'translate(-10%, 20%) scale(0.9)' },
        },
        'lava-move-2': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-40%, 30%) scale(1.3)' },
          '100%': { transform: 'translate(20%, -20%) scale(0.8)' },
        },
        'lava-move-3': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30%, 30%) scale(1.1)' },
          '100%': { transform: 'translate(-20%, -20%) scale(1.2)' },
        }
      },
      animation: {
        'reveal-up': 'revealUp 0.8s ease-out forwards',
        'lava-1': 'lava-move-1 8s infinite ease-in-out alternate',
        'lava-2': 'lava-move-2 12s infinite ease-in-out alternate',
        'lava-3': 'lava-move-3 10s infinite ease-in-out alternate',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}