import Footer from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { fontManrope, fontMono } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';
import clsx from 'clsx';
import { Metadata, Viewport } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          'min-h-screen text-foreground font-manrope antialiased bg-background-light dark:bg-primary-dark',
          fontManrope.variable,
          fontMono.variable
        )}
      >
        <NextTopLoader
          showSpinner={false}
          color="hsl(var(--heroui-primary))"
          shadow="0 0 12px hsl(var(--heroui-primary))"
        />
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow w-full">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
