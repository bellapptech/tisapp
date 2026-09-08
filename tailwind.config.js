/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tisRed: '#8B0000',
        tisDarkRed: '#5C0000',
        tisGold: '#D4AF37',
      },
    },
  },
  plugins: [],
}