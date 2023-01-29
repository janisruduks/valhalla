/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cw': '#E1DAFA',
        'c0': '#9180d9',
        'c1': '#cb6a3a',
        'c2': '#ab0a39',
        'c3': '#533EA8',
      }
    },
  },
  plugins: [],
}