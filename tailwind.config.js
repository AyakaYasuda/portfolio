module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '.625rem', // 10px
      sm: '.75rem', // 12px
      tiny: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.375rem', // 22px
      '3xl': '1.75rem', // 28px
      '4xl': '1.875rem', // 30px
      '5xl': '2.625rem', // 42px
      '6xl': '2.813rem', // 45px
    },
    extend: {
      colors: {
        orange: '#FFBF69',
        brown: '#5B4F5C',
        'green-dark': '#2EC4B6',
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
};
