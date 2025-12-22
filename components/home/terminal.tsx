'use client';

import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { useEffect, useRef } from 'react';
import { MdChevronRight } from 'react-icons/md';

gsap.registerPlugin(TextPlugin);

const TerminalGreet = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { text: '' },
      {
        text: 'initializing_portfolio...',
        duration: 1.6,
        ease: 'steps(25)',
      }
    );
  }, []);

  return (
    <div className="w-[300px]">
      <div className="bg-zinc-900 dark:bg-black border border-zinc-800 rounded-3xl p-4 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="flex gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <code className="font-mono text-sm text-primary flex items-center gap-2">
          <MdChevronRight />
          <span ref={textRef} />
          <span className="w-2 h-4 bg-primary animate-pulse inline-block ml-1" />
        </code>
      </div>
    </div>
  );
};

export default TerminalGreet;
