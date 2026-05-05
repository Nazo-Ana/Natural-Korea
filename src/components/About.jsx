import SectionHeading from './SectionHeading.jsx';
import { about } from '../data/siteContent.js';

export default function About() {
  const [mainImage, ...smallImages] = about.images;

  return (
    <section id="about" className="split-section about-section">
      <div className="image-grid reveal">
        <div className="image-main">
          <img src={mainImage.src} alt={mainImage.alt} />
        </div>
        {smallImages.map((image) => (
          <div className="image-small" key={image.alt}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

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
            <article className={`pillar-card reveal reveal-delay-${Math.min(index + 1, 4)}`} key={pillar.title}>
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
