import SectionHeading from './SectionHeading.jsx';
import { whyChoose } from '../data/siteContent.js';

export default function WhyChoose() {
  return (
    <section id="why" className="why-section">
      <div className="section-intro">
        <SectionHeading eyebrow="Our Difference" center>
          Why Choose <em>Natural Korea</em>
        </SectionHeading>
        <p className="intro-copy dark reveal reveal-delay-2">
          Four pillars that set us apart in the global supplement industry.
        </p>
      </div>

      <div className="why-grid">
        {whyChoose.map((item, index) => (
          <article className={`why-card reveal reveal-delay-${Math.min(index, 3)}`} key={item.title}>
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
