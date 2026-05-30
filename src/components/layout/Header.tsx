import { useState } from 'react';
import Logo from '../shared/Logo';
import { navigation } from '../../data/siteContent';
import { useScrollThreshold } from '../../hooks/useScrollThreshold';
import { cx } from '../../utils/classNames';

export default function Header() {
  const isScrolled = useScrollThreshold();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={cx('site-header', isScrolled && 'scrolled')}>
      <Logo />
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav
        id="main-navigation"
        className={cx('nav-links', isMenuOpen && 'open')}
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>
          Contact Us
        </a>
      </nav>
    </header>
  );
}
