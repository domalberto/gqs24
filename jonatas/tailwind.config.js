/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lexend': ['Lexend', 'sans-serif'],
      }, colors: {
        'amarelo':'#E5C734',
        'azul':'#2C51A0',
        'azul_1':'#0460D9',
        'azul_2':'#044bd9',
        'azul_3':'#0442BF',
        'amarelo_1':'#F2CB05',
        'amarelo_2':'#F2B705',
        'amarelo_3':'#F29F05',
        'branco_1':'#E9F0F2',
        'branco_2':'#D2D6D9',
        'preto':'#011526'
      },
      },
    },
    plugins: [],
  }

  