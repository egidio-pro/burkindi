/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Core brand colors
        'burkindi-beige': '#FAF8F5',      // Softer cream (was #F5F5DC)
        'burkindi-white': '#FEFEFE',
        'burkindi-taupe': '#2C2420',      // Darker for better contrast (was #483C32)
        'burkindi-taupe-light': '#5C5450', // For secondary text
        'burkindi-muted-blue': '#4A7C94', // More subtle blue
        'burkindi-muted-green': '#5A7A5A', // More subtle green
        'burkindi-red': '#B22222',
        'burkindi-red-dark': '#8B1A1A',   // For hover states
        'burkindi-yellow': '#DAA520',
        'burkindi-yellow-light': '#E8C547', // For highlights
      },
      animation: {
        blob: 'blob 12s infinite', // Slower animation (was 7s)
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(20px, -30px) scale(1.05)', // Less aggressive
          },
          '66%': {
            transform: 'translate(-15px, 15px) scale(0.95)', // Less aggressive
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}