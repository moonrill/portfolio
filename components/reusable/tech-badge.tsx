import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRef } from 'react';
import { IconType } from 'react-icons';

/**
 * Interface for the props of the TechBadge component.
 * @interface TechBadgeProps
 * @property {string} text - The text to display in the badge.
 * @property {string} href - The URL to link to.
 * @property {IconType} icon - The icon to display.
 */
interface TechBadgeProps {
  text: string;
  href: string;
  icon: IconType;
}

/**
 * TechBadge is a badge component that displays a technology with a name, icon, and link.
 * It uses GSAP to create a hover animation.
 * @param {TechBadgeProps} props - The props for the component.
 * @returns {JSX.Element} The rendered TechBadge component.
 */
const TechBadge = ({ text, href, icon: Icon }: TechBadgeProps) => {
  const badgeRef = useRef<HTMLAnchorElement>(null);

  const { contextSafe } = useGSAP({ scope: badgeRef });

  // The onMouseEnter function is used to animate the badge when the mouse enters it. 🚀
  const onMouseEnter = contextSafe(() => {
    gsap.to(badgeRef.current, {
      scale: 1.05,
      y: -2,
      duration: 0.3,
      ease: 'power2.out',
      boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
    });
  });

  // The onMouseLeave function is used to animate the badge when the mouse leaves it. 👋
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
      {/* Renders the icon for the badge. 🎨 */}
      <Icon className="text-[18px]" />
      {/* Renders the text for the badge. 📝 */}
      {text}
    </Link>
  );
};

export default TechBadge;
