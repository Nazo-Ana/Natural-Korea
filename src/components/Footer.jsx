import Logo from './Logo.jsx';
import { brand, footerLinks } from '../data/siteContent.js';

const linkTargets = {
  'About Us': '#about',
  Manufacturing: '#manufacturing',
  Quality: '#why',
  Leadership: '#leadership',
  Careers: '#contact',
  'Contact Us': '#contact',
};

function getLink(label, group) {
  if (linkTargets[label]) return linkTargets[label];
  if (group === 'Products') return '#products';
  return '#contact';
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Logo />
          <p>{brand.tagline}. Premium dietary supplements crafted in Seoul, South Korea.</p>
          <div className="footer-socials">
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer" aria-label="Natural Korea Instagram">
              IG
            </a>
            <a href={`mailto:${brand.email}`} aria-label="Email Natural Korea">
              @
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h3>{group}</h3>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a href={getLink(link, group)}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 Natural Korea. All rights reserved. Seoul, South Korea.</span>
        <div>
          <a href={`mailto:${brand.email}`}>Email</a>
          <a href={brand.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
