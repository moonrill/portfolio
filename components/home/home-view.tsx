'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Hero from './hero';

const HomeView = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === 'light' ? (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-pulse" />
          <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[100px] mix-blend-multiply opacity-60" />
          <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-purple-300/30 rounded-full blur-[80px] mix-blend-multiply opacity-40" />
        </div>
      ) : (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
          <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/20 dark:bg-blue-900/20 rounded-full blur-[100px] mix-blend-screen opacity-40" />
        </div>
      )}

      <Hero />
    </>
  );
};

export default HomeView;
