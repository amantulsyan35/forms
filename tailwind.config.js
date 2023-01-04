const { readBuilderProgram } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'controls-background': 'rgba(0, 0, 0, 0.8)',
      },
      // backgroundImage: {
      //   landing_bg: "url('../public/context_bg.webp')",
      // },
      fontFamily: {
        Book: 'Book',
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
