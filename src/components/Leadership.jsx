import SectionHeading from './SectionHeading.jsx';
import { leadership } from '../data/siteContent.js';

export default function Leadership() {
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
