import ImageGrid from '../components/common/ImageGrid';
import SectionHeading from '../components/common/SectionHeading';
import { about } from '../constants/siteContent';
import { revealDelayClass } from '../utils/reveal';

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
            <article className={`pillar-card reveal ${revealDelayClass(index, 1)}`} key={pillar.title}>
              <span>{pillar.icon}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
