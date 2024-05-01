/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fit-o': '#FFC635',
        'fit-b': '#1A212B',
        'fit-w': '#F6F8FB'
      },
      backgroundColor: {
        'fit-o': '#FFC635',
        'fit-b': '#1A212B',
        'fit-w': '#F6F8FB'
      },
      fontFamily: {
        archivo: ['Archivo Black', 'sans-serif']
      }
    },
  },
  plugins: [],
}

