/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'PoppinsBlack': ['PoppinsBlack'],
        'PoppinsBold': ['PoppinsBold'],
        'PoppinsRegular': ['PoppinsRegular'],
      },
    },
    colors: {
      primary_white: '#FAF6F0',
      secondary_black: '#2D2E32',
      customGray: '#DDDDDD'
    },
  },
  plugins: [],
}

