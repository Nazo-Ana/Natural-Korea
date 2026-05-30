import { SectionHeading } from '../shared';
import { leadership } from '../../data/siteContent';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="leadership-section">
      <SectionHeading eyebrow="Meet Our Leader" center>
        Guided by <em>Experience</em>
      </SectionHeading>
      <article className="leader-card reveal reveal-delay-2">
        <div className="leader-avatar">SJ</div>
        <h3>{leadership.name}</h3>
        <p className="leader-title">{leadership.title}</p>
        <p>{leadership.bio}</p>
      </article>
    </section>
  );
}
