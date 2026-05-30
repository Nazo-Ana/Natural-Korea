import { MetricGrid } from '../shared';
import { ButtonLink } from '../ui';
import { hero } from '../../data/siteContent';

export default function HeroSection() {
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
          <ButtonLink href="#products">View Products</ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Contact Us
          </ButtonLink>
        </div>
        <MetricGrid stats={hero.stats} className="hero-stats reveal reveal-delay-4" />
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
