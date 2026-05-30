import type { Testimonial } from '../../types/content';

type TestimonialCardProps = {
  testimonial: Testimonial;
  className: string;
};

export default function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <article className={className}>
      <span className="quote-mark" aria-hidden="true">
        "
      </span>
      <p>{testimonial.text}</p>
      <div className="testimonial-author">
        <span>{testimonial.name.charAt(0)}</span>
        <div>
          <strong aria-label="Rated 5 out of 5">&#9733;&#9733;&#9733;&#9733;&#9733;</strong>
          <h3>{testimonial.name}</h3>
          <small>{testimonial.title}</small>
        </div>
      </div>
    </article>
  );
}
