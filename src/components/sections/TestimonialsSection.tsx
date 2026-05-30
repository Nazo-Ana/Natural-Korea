import { TestimonialCard } from '../cards';
import { SectionHeading } from '../shared';
import { testimonials } from '../../data/siteContent';
import { revealDelayClass } from '../../utils/reveal';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <SectionHeading eyebrow="Testimonials" light center>
        What Our <em>Partners Say</em>
      </SectionHeading>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            className={`testimonial-card reveal ${revealDelayClass(index, 0, 3)}`}
            key={testimonial.name}
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  );
}
