/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#E1E1E6',
          800: '#1A1924',
          900: '#16151E',
        },
        blue: {
          400: '#0088B3',
          700: '#282843',
          900: '#24243D',
        },
        purple: {
          100: '#8C8CBA',
          900: '#633BBC',
        },
        teal: {
          800: '#07847E',
        },
        pink: {
          900: '#9A00B3',
        },
        yellow: {
          500: '#B38C00',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gap: {
        13: '3.25rem',
      },
    },
    fontSize: {
      xs: ['.75rem', '.875rem'],
      base: ['1rem', '1.25rem'],
      md: ['1.125rem', '1.25rem'],
      lg: ['1.25rem', '1.5rem'],
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
