/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#051650', // Based on your brand blue
      },
      // THIS IS THE NEW ANIMATION PART
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out forwards',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Needed for the 'prose' class in Legal.jsx
  ],
}