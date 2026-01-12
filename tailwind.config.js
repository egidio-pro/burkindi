/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'burkindi-beige': '#F5F5DC',
        'burkindi-taupe': '#483C32',
        'burkindi-muted-blue': '#6B8E9E',
        'burkindi-muted-green': '#7A9B7A',
        'burkindi-red': '#B22222',
        'burkindi-yellow': '#DAA520',
      },
    },
  },
  plugins: [],
}