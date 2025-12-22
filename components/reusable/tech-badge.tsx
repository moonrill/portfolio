import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRef } from 'react';
import { IconType } from 'react-icons';

interface TechBadgeProps {
  text: string;
  href: string;
  icon: IconType;
}

const TechBadge = ({ text, href, icon: Icon }: TechBadgeProps) => {
  const badgeRef = useRef<HTMLAnchorElement>(null);

  const { contextSafe } = useGSAP({ scope: badgeRef });

  const onMouseEnter = contextSafe(() => {
    gsap.to(badgeRef.current, {
      scale: 1.05,
      y: -2,
      duration: 0.3,
      ease: 'power2.out',
      boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
    });
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to(badgeRef.current, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.inOut',
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    });
  });

  return (
    <Link
      target="_blank"
      href={href ?? '#'}
      ref={badgeRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="px-4 py-2 rounded-full text-slate-600 dark:text-slate-100 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 text-base font-semibold flex items-center gap-2 hover:border-primary transition-colors cursor-pointer hover:text-primary dark:hover:text-primary"
    >
      <Icon className="text-[18px]" />
      {text}
    </Link>
  );
};

export default TechBadge;
