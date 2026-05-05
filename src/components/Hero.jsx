import { hero } from '../data/siteContent.js';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-copy">
        <p className="hero-badge reveal">{hero.badge}</p>
        <h1 className="hero-title reveal reveal-delay-1">
          {hero.headline[0]}
          <em>{hero.headline[1]}</em>
          <span>{hero.headline[2]}</span>
        </h1>
        <p className="hero-subline reveal reveal-delay-2">{hero.subline}</p>
        <p className="hero-text reveal reveal-delay-2">{hero.text}</p>
        <div className="hero-actions reveal reveal-delay-3">
          <a className="btn primary" href="#products">
            View Products
          </a>
          <a className="btn secondary" href="#contact">
            Contact Us
          </a>
        </div>
        <div className="hero-stats reveal reveal-delay-4">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-media reveal reveal-delay-2">
        <div className="product-frame">
          <img src={hero.image} alt={hero.imageAlt} />
          <div className="image-tags">
            {hero.imageTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
