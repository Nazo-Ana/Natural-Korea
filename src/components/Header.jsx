import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import { navigation } from '../data/siteContent.js';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className={isScrolled ? 'site-header scrolled' : 'site-header'}>
      <Logo />
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav className={isMenuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={handleLinkClick}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={handleLinkClick}>
          Contact Us
        </a>
      </nav>
    </header>
  );
}
