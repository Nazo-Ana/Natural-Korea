import ginsengBox from '../assets/images/products/ginseng-natural-g-box.png';
import ginsengPack from '../assets/images/products/ginseng-natural-g-pack.png';
import omega369Pack from '../assets/images/products/omega-369-pack.png';
import omegaCard from '../assets/images/products/omega-fish-oil-card.png';
import omega369Card from '../assets/images/products/omega-369-card.png';
import omegaHero from '../assets/images/products/omega-fish-oil-hero.png';
import type { Certification, IconCard, ImageAsset, Stat, Testimonial } from '../types/content';

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
