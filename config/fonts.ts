import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Manrope,
} from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const fontManrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});
