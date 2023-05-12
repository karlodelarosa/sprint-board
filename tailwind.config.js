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
        'primary-text': '#060C41',
        'secondary-1': '#99d7ec',
        'secondary-2': '#c4a1ff',
        'danger': '#A40404'
      },
      borderRadius: {
        'custom-button': '13px',
        'custom-input': '4px',
        'custom-card': '5px',
        'custom-column': '10px',
      },
    },
  },
  plugins: [],
}

