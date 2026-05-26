import type { ReactNode } from 'react';

export type ImageAsset = {
  src: string;
  alt: string;
};

export type Brand = {
  name: string;
  label: string;
  tagline: string;
  founded: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  address: string[];
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type Certification = {
  icon: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type IconCard = {
  icon: string;
  title: string;
  text: string;
};

export type Product = {
  name: string;
  subtitle: string;
  image: string;
  alt: string;
  items: string[];
  tag: string;
};

export type Testimonial = {
  text: string;
  name: string;
  title: string;
};

export type FooterLinks = Record<string, string[]>;

export type HeadingChildren = ReactNode;
