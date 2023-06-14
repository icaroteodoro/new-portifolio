/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        open : 'var(--font-open)',
      },
      colors:{
        gray:{
          200: '#292B32',
          600: '#1E1E22',
        },
        blue: {
          700: '#12121B'
        }
      },
      transitionDuration: {
        '500' : '500ms',
      },
      rotate: {
        '225' : '225deg',
      }
      
    },
  },
  plugins: [],
}
