/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
      bebas: ['Bebas Neue', 'sans-serif'],
      helvetica: ['Helvetica', 'Arial', 'sans-serif'],
    },}
  },
  plugins: [require('flowbite/plugin'), require('tw-elements/plugin.cjs')],
  darkMode: 'class'
}
