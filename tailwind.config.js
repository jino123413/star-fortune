/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1A237E',
        'primary-light': '#3949AB',
        'primary-dark': '#0D1452',
        accent: '#7C4DFF',
        'accent-light': '#B388FF',
        'accent-dark': '#651FFF',
        gold: '#FFD54F',
        'gold-light': '#FFECB3',
      },
      fontFamily: {
        sans: ['GmarketSans', 'Pretendard Variable', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        btn: '12px',
      },
    },
  },
  plugins: [],
};
