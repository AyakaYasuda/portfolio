/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#FFBF69',
        brown: '#5B4F5C',
        'green-dark': '2EC4B6',
        'green-light': '#BEE3DB',
        'pink-dark': '#F28482',
        'pink-light': '#F5CAC3',
        'blue-light': '#F9FCFC',
      },
      fontFamily: {
        popping: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
