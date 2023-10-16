/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('rds-tailwind-theme')],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

