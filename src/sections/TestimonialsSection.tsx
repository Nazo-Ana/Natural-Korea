import SectionHeading from '../components/common/SectionHeading';
import { testimonials } from '../constants/siteContent';
import { revealDelayClass } from '../utils/reveal';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <SectionHeading eyebrow="Testimonials" light center>
        What Our <em>Partners Say</em>
      </SectionHeading>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <article className={`testimonial-card reveal ${revealDelayClass(index, 0, 3)}`} key={testimonial.name}>
            <span className="quote-mark" aria-hidden="true">
              "
            </span>
            <p>{testimonial.text}</p>
            <div className="testimonial-author">
              <span>{testimonial.name.charAt(0)}</span>
              <div>
                <strong aria-label="Rated 5 out of 5">★★★★★</strong>
                <h3>{testimonial.name}</h3>
                <small>{testimonial.title}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
