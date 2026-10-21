/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#244E8C',
          50: '#eef4fb',
          100: '#d6e4f5',
          200: '#aec8e8',
          300: '#7ea6d6',
          400: '#4d80c0',
          500: '#244E8C',
          600: '#1d3f74',
          700: '#17335f',
          800: '#122849',
          900: '#0d1d36',
        },
        accent: {
          DEFAULT: '#35B8D5',
          50: '#eaf9fc',
          100: '#cef2f8',
          200: '#a0e6f1',
          300: '#6ad6e8',
          400: '#35B8D5',
          500: '#1f9ec0',
          600: '#1681a3',
          700: '#136885',
          800: '#11536b',
          900: '#0e4356',
        },
        navy: {
          DEFAULT: '#14243D',
          50: '#e9edf2',
          100: '#cdd5df',
          200: '#9fb0c2',
          300: '#6f8aa6',
          400: '#446686',
          500: '#264b6c',
          600: '#1d3c58',
          700: '#14243D',
          800: '#0f1c31',
          900: '#0a1424',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '80%, 100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
