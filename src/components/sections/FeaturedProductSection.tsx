import { MetricGrid } from '../shared';
import { featuredProduct } from '../../data/siteContent';

export default function FeaturedProductSection() {
  return (
    <section id="featured" className="feature-band">
      <div className="feature-image">
        <img src={featuredProduct.image} alt={featuredProduct.imageAlt} />
      </div>
      <div className="feature-copy">
        <p className="feature-badge reveal">{featuredProduct.eyebrow}</p>
        <h2 className="feature-title reveal reveal-delay-1">
          Natural Korea
          <em>Omega-3</em>
          Fish Oil Softgel
        </h2>
        <p className="feature-text reveal reveal-delay-2">{featuredProduct.text}</p>
        <MetricGrid stats={featuredProduct.specs} className="spec-grid reveal reveal-delay-2" />
        <ul className="benefit-list reveal reveal-delay-3">
          {featuredProduct.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
