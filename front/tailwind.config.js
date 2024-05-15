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
        'fit-w': '#F6F8FB',
        'fit-g': '#9AA8BC',
        'fit-r': '#FF4D35'
      },
      backgroundColor: {
        'fit-o': '#FFC635',
        'fit-b': '#1A212B',
        'fit-w': '#F6F8FB',
        'fit-g': '#9AA8BC',
        'fit-r': '#FF4D35'
      },
      fontFamily: {
        archivo: ['Archivo Black', 'sans-serif']
      }
    },
  },
  plugins: [],
}

