import { siteConfig } from '@/config/site';
import { SocialItem } from '@/types/footer';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';

export const socialItems: SocialItem[] = [
  {
    label: 'GitHub',
    href: siteConfig.links.github,
    icon: FaGithub,
    hoverColor: '#333',
    darkHoverColor: '#c9d1d9',
  },
  {
    label: 'Twitter',
    href: siteConfig.links.twitter,
    icon: FaTwitter,
    hoverColor: '#1DA1F2',
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: FaLinkedin,
    hoverColor: '#0A66C2',
  },
  {
    label: 'Youtube',
    href: '#',
    icon: FaYoutube,
    hoverColor: '#FF0000',
  },
];
