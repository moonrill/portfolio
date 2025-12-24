'use client';

import { Link } from '@heroui/link';
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/navbar';
import { button as buttonStyles } from '@heroui/theme';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { ThemeSwitch } from '@/components/theme-switch';
import { siteConfig } from '@/config/site';
import { useState } from 'react';
import { MdTerminal } from 'react-icons/md';

/**
 * Navbar is the main navigation bar for the application.
 * It displays the brand, navigation links, a theme switch, and a mobile menu.
 * @returns {JSX.Element} The rendered Navbar component.
 */
export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="border-b border-zinc-100 dark:border-zinc-700/50 backdrop-blur-md bg-background-light/80"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        {/* The brand logo and name. 🎨 */}
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex items-center gap-3" href="/">
            <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
              <MdTerminal className="text-2xl font-bold text-primary" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">
              &lt;Moonrill /&gt;
            </h2>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* The main navigation links. 🔗 */}
      <NavbarContent justify="center">
        <ul className="hidden lg:flex gap-6 justify-center ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={`
                  relative
                  text-sm
                  font-medium
                  text-slate-600
                  data-[active=true]:text-primary
                  dark:data-[active=true]:text-primary
                  data-[active=true]:font-bold
                  transition-colors
                  duration-300
                  ease-in-out
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-primary
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                  hover:text-primary
                  dark:text-white
                  `}
                color="foreground"
                href={item.href}
                data-active={item.href === '/' ? pathname === item.href : pathname.startsWith(item.href)}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* The right side of the navbar, with the theme switch and a "Hire Me" button. 🌓 */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link
            isExternal
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
              className: 'dark:text-primary-dark font-bold px-6',
            })}
            href={siteConfig.links.docs}
          >
            Hire Me
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* The mobile menu toggle and theme switch. 📱 */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* The mobile menu. 📝 */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  item.href === '/'
                    ? pathname === item.href
                      ? 'primary'
                      : 'foreground'
                    : pathname.startsWith(item.href)
                    ? 'primary'
                    : 'foreground'
                }
                href={item.href}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
