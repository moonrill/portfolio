import { Button } from '@heroui/button';
import { Divider } from '@heroui/divider';
import { Input } from '@heroui/input';
import { Link } from '@heroui/link';
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa6';
import { MdMail, MdTerminal } from 'react-icons/md';

/**
 * Footer is the main footer for the application.
 * It displays the brand, a newsletter subscription form, navigation links, social media links, and a bottom bar.
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer: React.FC = () => {
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
                    'bg-default-100 data-[hover=true]:bg-default-200',
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
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    color="foreground"
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
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
              <SocialItem label="GitHub" code="GH" />
              <SocialItem label="LinkedIn" code="LI" />
              <SocialItem label="Twitter" code="TW" />
              <SocialItem label="Email" icon />
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
 * @property {string} [code] - The code for the social media link.
 * @property {boolean} [icon] - Whether to display an icon instead of a code.
 */
interface SocialItemProps {
  label: string;
  code?: string;
  icon?: boolean;
}

/**
 * SocialItem is a component that displays a social media link with a label and either a code or an icon.
 * @param {SocialItemProps} props - The props for the component.
 * @returns {JSX.Element} The rendered SocialItem component.
 */
const SocialItem: React.FC<SocialItemProps> = ({ label, code, icon }) => {
  return (
    <Link
      href="#"
      className="flex items-center gap-3 rounded-xl border border-divider bg-default-50 p-3 transition-all hover:border-primary/50 hover:shadow-md"
    >
      {/* Renders either an icon or a code for the social media link. 🎨 */}
      {icon ? (
        <MdMail className="text-lg text-foreground/60" />
      ) : (
        <span className="rounded-md bg-default-200 px-1.5 py-0.5 font-mono text-xs font-bold text-foreground/60">
          {code}
        </span>
      )}

      {/* Renders the label for the social media link. 📝 */}
      <span className="text-sm font-semibold text-foreground/70">{label}</span>
    </Link>
  );
};
