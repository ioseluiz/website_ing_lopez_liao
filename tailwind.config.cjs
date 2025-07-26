// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0056B3', // A shade of blue for primary color
        'primary-content': '#FFFFFF', // White text on primary background
        'accent': '#FFD700',   // A shade of gold for accent color
        'accent-focus': '#FFA500', // A slightly darker gold for hover/focus states
      },
    },
  },
  plugins: [],
};