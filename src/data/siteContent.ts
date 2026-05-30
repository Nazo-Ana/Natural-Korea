import ginsengBox from '../assets/images/products/ginseng-natural-g-box.png';
import ginsengPack from '../assets/images/products/ginseng-natural-g-pack.png';
import omega369Card from '../assets/images/products/omega-369-card.png';
import omega369Pack from '../assets/images/products/omega-369-pack.png';
import omegaCard from '../assets/images/products/omega-fish-oil-card.png';
import omegaHero from '../assets/images/products/omega-fish-oil-hero.png';
import { CONTACT_EMAIL } from '../constants/contact';
import type { Brand, Certification, FooterLinks, IconCard, ImageAsset, NavigationItem, Product, Stat, Testimonial } from '../types/content';

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

export const hero = {
  badge: 'Natural Korea - Premium Grade',
  headline: ['Enhancing', 'Health', 'Through Science'],
  subline: '& Nature - Since 2018',
  text:
    'A health and wellness company specializing in high-quality dietary supplements, combining modern science with natural Korean ingredients for a healthier life.',
  image: omegaHero,
  imageAlt: 'Natural Korea Omega-3 Fish Oil Softgel',
  imageTags: ['1000mg EPA/DHA', '100% Natural', 'Made in Korea'],
  stats: [
    { value: '2018', label: 'Established' },
    { value: '4+', label: 'Product Types' },
    { value: 'GMP', label: 'Certified' },
  ] satisfies Stat[],
} as const;

export const certifications: Certification[] = [
  { icon: 'OK', label: 'GMP' },
  { icon: 'ISO', label: 'ISO' },
  { icon: 'N', label: 'Natural' },
  { icon: 'Lab', label: 'Lab Tested' },
  { icon: 'KR', label: 'Made in Korea' },
];

export const about = {
  images: [
    { src: ginsengBox, alt: 'Ginseng Softgels Natural-G' },
    { src: ginsengPack, alt: 'Ginseng Softgels product' },
    { src: omega369Pack, alt: 'Omega 3-6-9 Softgel' },
  ] satisfies ImageAsset[],
  paragraphs: [
    'Natural Korea is a health and wellness company specializing in premium dietary supplements - tablets, capsules, softgels, and gummies. We combine scientific research with the finest natural ingredients for effective nutritional solutions.',
    'Established in 2018 in Seoul, South Korea, we were founded with the goal of delivering high-quality, science-based supplements. We have since expanded our product portfolio and built a strong global reputation for quality and reliability.',
  ],
  pillars: [
    {
      icon: '01',
      title: 'Our Mission',
      text: 'Improve everyday health by delivering safe, effective, and accessible nutritional supplements.',
    },
    {
      icon: '02',
      title: 'Our Vision',
      text: 'To become a globally trusted leader in the supplement industry, recognized for innovation and quality.',
    },
    {
      icon: '03',
      title: 'Science First',
      text: 'Every product is scientifically formulated for maximum efficacy and safety.',
    },
    {
      icon: '04',
      title: 'Natural Ingredients',
      text: 'Premium natural ingredients carefully sourced from trusted global suppliers.',
    },
  ] satisfies IconCard[],
} as const;

export const featuredProduct = {
  eyebrow: 'Bestseller - Fish Oil Softgel',
  image: omegaHero,
  imageAlt: 'Omega-3 Fish Oil Softgel',
  text:
    'Triple-action EPA & DHA formula delivering 1000mg per serving. Scientifically crafted in Korea to support heart health, brain function, and vision clarity.',
  specs: [
    { value: '1000mg', label: 'Per Serving' },
    { value: '30', label: 'Day Supply' },
    { value: '100%', label: 'Natural' },
  ] satisfies Stat[],
  benefits: [
    'Supports cardiovascular wellness & healthy cholesterol',
    'Promotes cognitive function, memory & mental clarity',
    'Helps maintain healthy vision and reduces eye strain',
    'Strengthens immunity and supports overall well-being',
  ],
} as const;

export const products: Product[] = [
  {
    name: 'Omega-3 Fish Oil Softgel',
    subtitle: '1000mg EPA/DHA - 30 Softgels - Dietary Supplement',
    image: omegaCard,
    alt: 'Omega-3 Fish Oil Softgel',
    items: ['1000mg per serving', 'EPA & DHA rich formula', 'Sealed for freshness'],
    tag: 'Heart - Brain - Vision',
  },
  {
    name: 'Omega 3-6-9 Softgel',
    subtitle: '1000mg - 30 Softgels - Complete Omega Complex',
    image: omega369Card,
    alt: 'Omega 3-6-9 Softgel',
    items: ['Triple omega complex', 'Heart, brain & vision support', 'Premium quality capsules'],
    tag: 'Complete Omega',
  },
  {
    name: 'Ginseng Softgels Natural-G',
    subtitle: 'Vitamins - Minerals - Panax Ginseng Extract',
    image: ginsengPack,
    alt: 'Ginseng Softgels Natural-G',
    items: ['Panax Ginseng Extract', 'Vitamins & Minerals blend', '30 pills - 6 blister packs'],
    tag: 'Energy - Immunity',
  },
  {
    name: 'Omega 3-6-9 Lifestyle',
    subtitle: '1000mg - 30 Softgels - Daily Wellness Formula',
    image: omega369Pack,
    alt: 'Omega 3-6-9 lifestyle product',
    items: ['Golden softgel capsules', 'Daily wellness routine', 'EPA & DHA certified'],
    tag: 'Daily Wellness',
  },
];

export const ginsengFeature = {
  image: ginsengBox,
  imageAlt: 'Ginseng Softgels Natural-G premium',
  text:
    'Rooted in thousands of years of Korean herbal tradition, our Ginseng Softgels combine Panax Ginseng Extract with essential vitamins and minerals for a truly complete wellness formula.',
  badges: ['Energy & Vitality Boost', 'Immune Support', 'Stress & Fatigue Relief', 'Cognitive Function', 'Made in Korea'],
} as const;

export const whyChoose: IconCard[] = [
  {
    icon: '01',
    title: 'Premium Quality Ingredients',
    text: 'We source only the finest natural ingredients, verified for purity and potency from trusted global suppliers.',
  },
  {
    icon: '02',
    title: 'Advanced Manufacturing',
    text: 'State-of-the-art production facilities with cutting-edge technology ensuring consistency and safety.',
  },
  {
    icon: '03',
    title: 'Scientifically Formulated',
    text: 'Every formula developed with scientific rigor, backed by research for maximum effectiveness.',
  },
  {
    icon: '04',
    title: 'Global Standards Compliance',
    text: 'Full GMP compliance and international regulatory standards across all manufacturing processes.',
  },
];

export const manufacturing = {
  text:
    'Our products are manufactured in advanced Seoul facilities meeting international production and safety standards. Strict quality control is maintained across all stages - from raw material sourcing to final distribution.',
  images: {
    main: omegaHero,
    mainAlt: 'Manufacturing quality',
    small: [
      { src: omegaCard, alt: 'Omega-3 product' },
      { src: omega369Card, alt: 'Omega 3-6-9 product' },
    ] satisfies ImageAsset[],
  },
  features: [
    {
      icon: '01',
      title: 'Modern Production Facilities',
      text: 'Advanced machinery and hygienic environments for premium output quality.',
    },
    {
      icon: '02',
      title: 'GMP Compliance',
      text: 'All processes follow Good Manufacturing Practice guidelines for consistency and quality.',
    },
    {
      icon: '03',
      title: 'Strict Quality Control',
      text: 'Rigorous testing at every stage from raw materials to final packaged product.',
    },
    {
      icon: '04',
      title: 'International Compliance',
      text: 'Meeting and exceeding international regulatory standards for global market access.',
    },
  ] satisfies IconCard[],
} as const;

export const leadership = {
  name: 'Seo Joon',
  title: 'Chief Executive Officer',
  bio:
    'Natural Korea is led by an experienced leadership team with deep expertise in health, nutrition, and product innovation - committed to bringing the best of Korean wellness science to the world.',
} as const;

export const testimonials: Testimonial[] = [
  {
    text:
      "Natural Korea's Omega 3-6-9 softgels are exceptional - the quality is visibly superior and our customers report outstanding results. A truly reliable partner.",
    name: 'Kim Dae-Jung',
    title: 'Health Store Owner, Seoul',
  },
  {
    text:
      'The GMP-compliant manufacturing gives us complete confidence in product safety and consistency. Natural Korea truly embodies international quality standards.',
    name: 'Dr. Park Ji-Hye',
    title: 'Nutritionist & Wellness Consultant',
  },
  {
    text:
      "We've partnered with Natural Korea for two years. Their commitment to ingredient quality and scientific formulation sets them apart in a crowded market.",
    name: 'James Chen',
    title: 'International Distributor, Singapore',
  },
];

export const footerLinks: FooterLinks = {
  Products: ['Omega-3 Softgel', 'Omega 3-6-9', 'Ginseng Natural-G', 'Tablets', 'Gummies'],
  Company: ['About Us', 'Manufacturing', 'Quality', 'Leadership', 'Careers'],
  Certifications: ['GMP Certified', 'ISO Standards', 'Quality Assurance', 'International Compliance', 'Contact Us'],
};
