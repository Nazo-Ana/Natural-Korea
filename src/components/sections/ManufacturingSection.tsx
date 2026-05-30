import { IconCard } from '../cards';
import { ImageGrid, SectionHeading } from '../shared';
import { manufacturing } from '../../data/siteContent';
import { revealDelayClass } from '../../utils/reveal';

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
            <IconCard
              className={`feature-list-item reveal ${revealDelayClass(index, 0, 3)}`}
              contentWrapper
              icon={feature.icon}
              key={feature.title}
              text={feature.text}
              title={feature.title}
            />
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
