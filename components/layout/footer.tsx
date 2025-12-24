'use client';

import { Button } from '@heroui/button';
import { Divider } from '@heroui/divider';
import { Input } from '@heroui/input';
import { Link } from '@heroui/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { FaPaperPlane } from 'react-icons/fa6';
import { MdMail, MdTerminal } from 'react-icons/md';

import { siteConfig } from '@/config/site';
import { socialItems } from '@/const/social';
import { SocialItem as SocialItemType } from '@/types/footer';

/**
 * Footer is the main footer for the application.
 * It displays the brand, a newsletter subscription form, navigation links, social media links, and a bottom bar.
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer: React.FC = () => {
  const pathname = usePathname();

  return (
    <footer className="relative mt-16 border-t border-divider bg-background/60 backdrop-blur-xl">
      {/* top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:py-16">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mb-16">
          {/* BRAND */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                <MdTerminal className="text-xl" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">
                &lt;Moonrill /&gt;
              </h2>
            </div>

            <p className="max-w-sm text-foreground/70 leading-relaxed">
              Full-stack developer focused on building scalable web
              applications, clean backend architectures, and performant user
              experiences using modern technologies.
            </p>

            {/* HERO UI INPUT */}
            <div className="flex w-full max-w-xs gap-2">
              <Input
                type="email"
                radius="full"
                placeholder="Get in touch..."
                startContent={<MdMail className="text-foreground/50 text-lg" />}
                classNames={{
                  inputWrapper:
                    'bg-white shadow-none sm:bg-default-100 data-[hover=true]:bg-default-200',
                }}
              />
              <Button isIconOnly color="primary" radius="full" variant="shadow">
                <FaPaperPlane className="text-lg dark:text-primary-dark" />
              </Button>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              Navigation
            </h3>

            <ul className="space-y-4">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    color={
                      item.href === '/'
                        ? pathname === item.href
                          ? 'primary'
                          : 'foreground'
                        : pathname.startsWith(item.href)
                          ? 'primary'
                          : 'foreground'
                    }
                    className="text-sm text-foreground/70 hover:text-primary transition-colors data-[active=true]:text-primary data-[active=true]:font-bold"
                    data-active={
                      item.href === '/'
                        ? pathname === item.href
                        : pathname.startsWith(item.href)
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              Socials
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {socialItems.map((item: SocialItemType) => (
                <SocialItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                  hoverColor={item.hoverColor}
                  darkHoverColor={item.darkHoverColor}
                />
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* BOTTOM BAR */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} Moonrill. All rights reserved.
          </p>

          <div className="flex gap-6">
            {['Privacy Policy', 'Terms', 'Sitemap'].map((item) => (
              <Link
                key={item}
                href="#"
                size="sm"
                color="foreground"
                className="text-foreground/50 hover:text-foreground"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* ---------- SOCIAL ITEM ---------- */

/**
 * Interface for the props of the SocialItem component.
 * @interface SocialItemProps
 * @property {string} label - The label for the social media link.
 * @property {string} href - The URL to link to.
 * @property {IconType} icon - The icon to display.
 * @property {string} hoverColor - The color to use on hover in light mode.
 * @property {string} [darkHoverColor] - The color to use on hover in dark mode, if different.
 */
interface SocialItemProps {
  label: string;
  href: string;
  icon: IconType;
  hoverColor: string;
  darkHoverColor?: string;
}

/**
 * SocialItem is a component that displays a social media link with a label and an icon.
 * @param {SocialItemProps} props - The props for the component.
 * @returns {JSX.Element} The rendered SocialItem component.
 */
const SocialItem: React.FC<SocialItemProps> = ({
  label,
  href,
  icon: Icon,
  hoverColor,
  darkHoverColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  // Determine the effective hover color based on theme
  const effectiveHoverColor =
    theme === 'dark' && darkHoverColor ? darkHoverColor : hoverColor;

  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl border border-divider bg-default-50 sm:bg-transparent dark:bg-default-50 p-3 transition-all hover:border-primary/60 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon
        className="text-lg text-foreground/60 transition-colors duration-200"
        style={{ color: isHovered ? effectiveHoverColor : '' }}
      />
      <span className="text-sm font-semibold text-foreground/70">{label}</span>
    </Link>
  );
};
