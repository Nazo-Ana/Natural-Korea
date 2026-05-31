import { CONTACT_EMAIL } from '../constants/contact';
import type { Brand, FooterLinks, NavigationItem } from '../types/content';

export const brand: Brand = {
  name: 'Natural Korea',
  tagline: 'Enhancing health through science and nature',
  email: CONTACT_EMAIL,
  instagram: 'https://www.instagram.com/naturalkorea_',
  instagramHandle: '@naturalkorea_',
  address: ['14 Wiryeseong-daero, Songpa-gu', 'Seoul, South Korea'],
};

export const navigation: NavigationItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'Quality', href: '#why' },
];

export const footerLinks: FooterLinks = {
  Products: ['Omega-3 Softgel', 'Omega 3-6-9', 'Ginseng Natural-G', 'Tablets', 'Gummies'],
  Company: ['About Us', 'Manufacturing', 'Quality', 'Leadership', 'Careers'],
  Certifications: ['GMP Certified', 'ISO Standards', 'Quality Assurance', 'International Compliance', 'Contact Us'],
};
