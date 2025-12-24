import { IconType } from 'react-icons';

export interface SocialItem {
  label: string;
  href: string;
  icon: IconType;
  hoverColor: string;
  darkHoverColor?: string;
}
