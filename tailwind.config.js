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
        'PoppinsSemiBold': ['PoppinsSemiBold'],
        'PoppinsSemiBoldItalic': ['PoppinsSemiBoldItalic'],
      },
    },
    colors: {
      primary_white: '#D9D9D9',
      secondary_black: '#0D0D0D',
      customGray: '#1C1C1C',
      greenTagBg: '#86EFAC',
      greenTagText: '#166534',
      customGrayText: '#DDDDDD',
    },
  },
  plugins: [],
}

