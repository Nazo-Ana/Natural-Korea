import { ButtonLink } from '../ui';
import { ginsengFeature } from '../../data/siteContent';

export default function GinsengFeatureSection() {
  return (
    <section id="ginseng" className="ginseng-band">
      <div className="ginseng-copy">
        <p className="section-label light reveal">Heritage Formula</p>
        <h2 className="feature-title reveal reveal-delay-1">
          Natural-G
          <em>Ginseng</em>
          Softgels
        </h2>
        <p className="feature-text reveal reveal-delay-2">{ginsengFeature.text}</p>
        <div className="badge-row reveal reveal-delay-2">
          {ginsengFeature.badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
        <ButtonLink className="reveal reveal-delay-3" href="#contact">
          Enquire Now
        </ButtonLink>
      </div>
      <div className="feature-image">
        <img src={ginsengFeature.image} alt={ginsengFeature.imageAlt} />
      </div>
    </section>
  );
}
