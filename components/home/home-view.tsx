'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Hero from './hero';

/**
 * HomeView is the main view for the home page.
 * It displays a different background based on the current theme and renders the Hero component.
 * @returns {JSX.Element | null} The rendered HomeView component or null if not mounted.
 */
const HomeView = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect is used to set the mounted state to true after the component has mounted.
  // This is to prevent a hydration mismatch between the server and the client.
  useEffect(() => {
    setMounted(true);
  }, []);

  // If the component is not mounted, return null.
  if (!mounted) return null;

  return (
    <>
      {/* Renders a different background based on the current theme. 🎨 */}
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

      {/* Renders the Hero component, which contains the main content of the page. 🦸‍♂️ */}
      <Hero />
    </>
  );
};

export default HomeView;
