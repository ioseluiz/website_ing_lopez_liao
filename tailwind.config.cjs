// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#008080', // Verde Azulado Principal
          dark: '#348b97',
          light: '#004D40',
        },
        'accent': {
          DEFAULT: '#ae1f40', // Naranja/Dorado
        },
       'text-primary': '#1A202C',
       'text-secondary': '#718096',
       'background-light': '#F7FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};