import { brand } from '../data/siteContent.js';

export default function Logo() {
  return (
    <a className="logo" href="#hero" aria-label="Natural Korea home">
      <span className="logo-mark">N</span>
      <span className="logo-text">
        {brand.name}
        <small>{brand.label}</small>
      </span>
    </a>
  );
}
