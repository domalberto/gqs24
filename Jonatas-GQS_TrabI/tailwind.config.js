/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif'],
      }, colors: {
        'amarelo':'#E5C734',
        'azul':'#2C51A0',
      },
      },
    },
    plugins: [],
  }