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
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(221, 221, 221, 0.2)',
      }
    },
    colors: {
      primary_white: '#F9F9F9',
      secondary_black: '#2D2E32',
      customGray: '#DDDDDD'
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

