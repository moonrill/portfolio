import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        manrope: ['var(--font-manrope)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#9333ea',
              dark: '#180828',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#46ec13',
              dark: '#142210',
            },
          },
        },
      },
    }),
  ],
};

module.exports = config;
