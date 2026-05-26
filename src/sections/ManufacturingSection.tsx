import ImageGrid from '../components/common/ImageGrid';
import SectionHeading from '../components/common/SectionHeading';
import { manufacturing } from '../constants/siteContent';
import { revealDelayClass } from '../utils/reveal';

export default function ManufacturingSection() {
  const manufacturingImages = [
    { src: manufacturing.images.main, alt: manufacturing.images.mainAlt },
    ...manufacturing.images.small,
  ];

  return (
    <section id="manufacturing" className="split-section manufacturing-section">
      <div>
        <SectionHeading eyebrow="Our Facilities">
          World-Class <em>Manufacturing</em>
        </SectionHeading>
        <p className="body-copy reveal reveal-delay-2">{manufacturing.text}</p>
        <div className="feature-list">
          {manufacturing.features.map((feature, index) => (
            <article className={`feature-list-item reveal ${revealDelayClass(index, 0, 3)}`} key={feature.title}>
              <span>{feature.icon}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ImageGrid
        images={manufacturingImages}
        className="manufacturing-grid reveal reveal-delay-1"
        mainWide
        badge="GMP Certified Manufacturing"
      />
    </section>
  );
}
