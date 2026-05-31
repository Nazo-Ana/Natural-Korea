import ginsengBox from '../assets/images/products/ginseng-natural-g-box.png';
import ginsengPack from '../assets/images/products/ginseng-natural-g-pack.png';
import omega369Card from '../assets/images/products/omega-369-card.png';
import omega369Pack from '../assets/images/products/omega-369-pack.png';
import omegaCard from '../assets/images/products/omega-fish-oil-card.png';
import omegaHero from '../assets/images/products/omega-fish-oil-hero.png';
import type { Product, Stat } from '../types/content';

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

