/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#7FBC8C',
        'primary-2': '#FDFD96',
      },
    },
  },
  plugins: [],
}

