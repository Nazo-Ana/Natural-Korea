import { IconCard } from '../cards';
import { ImageGrid, SectionHeading } from '../shared';
import { about } from '../../data/siteContent';
import { revealDelayClass } from '../../utils/reveal';

export default function AboutSection() {
  return (
    <section id="about" className="split-section about-section">
      <ImageGrid images={about.images} className="reveal" />

      <div>
        <SectionHeading eyebrow="Our Story">
          A Vision Born <em>From Nature</em>
        </SectionHeading>
        {about.paragraphs.map((paragraph) => (
          <p className="body-copy reveal reveal-delay-2" key={paragraph}>
            {paragraph}
          </p>
        ))}
        <div className="pillar-grid">
          {about.pillars.map((pillar, index) => (
            <IconCard
              className={`pillar-card reveal ${revealDelayClass(index, 1)}`}
              icon={pillar.icon}
              key={pillar.title}
              text={pillar.text}
              title={pillar.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
