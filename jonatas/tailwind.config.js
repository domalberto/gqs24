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
        'blue_1':"#182D5F",
        'blue_2':"#1A3269",
        'blue_3':"#1D3774",
        'blue_4':"#315DC4",
        'orange_1':'#F17300',
        'orange_2':'#E06C00',
        'orange_3':'#CC6300',
        'white_1':'#E9F0F2',
        'white_2':'#D2D6D9',
        'white_3':'#F1F0EB',
      },
      },
    },
    plugins: [],
  }

  