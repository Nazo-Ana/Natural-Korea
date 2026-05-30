import { IconCard } from '../cards';
import { SectionIntro } from '../shared';
import { whyChoose } from '../../data/siteContent';
import { revealDelayClass } from '../../utils/reveal';

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
          <IconCard
            className={`why-card reveal ${revealDelayClass(index)}`}
            icon={item.icon}
            key={item.title}
            text={item.text}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}
