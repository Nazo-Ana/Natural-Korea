import SectionHeading from './SectionHeading.jsx';
import { manufacturing } from '../data/siteContent.js';

export default function Manufacturing() {
  return (
    <section id="manufacturing" className="split-section manufacturing-section">
      <div>
        <SectionHeading eyebrow="Our Facilities">
          World-Class <em>Manufacturing</em>
        </SectionHeading>
        <p className="body-copy reveal reveal-delay-2">{manufacturing.text}</p>
        <div className="feature-list">
          {manufacturing.features.map((feature, index) => (
            <article className={`feature-list-item reveal reveal-delay-${Math.min(index, 3)}`} key={feature.title}>
              <span>{feature.icon}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="image-grid manufacturing-grid reveal reveal-delay-1">
        <div className="image-main wide">
          <img src={manufacturing.images.main} alt={manufacturing.images.mainAlt} />
          <div className="image-badge">GMP Certified Manufacturing</div>
        </div>
        {manufacturing.images.small.map((image) => (
          <div className="image-small" key={image.alt}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
