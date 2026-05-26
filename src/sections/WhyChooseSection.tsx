import SectionIntro from '../components/common/SectionIntro';
import { whyChoose } from '../constants/siteContent';
import { revealDelayClass } from '../utils/reveal';

export default function WhyChooseSection() {
  return (
    <section id="why" className="why-section">
      <SectionIntro
        eyebrow="Our Difference"
        darkCopy
        copy="Four pillars that set us apart in the global supplement industry."
      >
        Why Choose <em>Natural Korea</em>
      </SectionIntro>

      <div className="why-grid">
        {whyChoose.map((item, index) => (
          <article className={`why-card reveal ${revealDelayClass(index)}`} key={item.title}>
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
