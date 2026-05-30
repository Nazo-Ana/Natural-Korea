import { ContactInfoItem } from '../cards';
import { ContactForm } from '../forms';
import { SectionHeading } from '../shared';
import { brand } from '../../data/siteContent';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div>
        <SectionHeading eyebrow="Get In Touch">
          Let's Build <em>Something</em> Together
        </SectionHeading>

        <p className="body-copy">
          Whether you're a distributor, retailer, or simply want to learn more about our premium supplement range,
          we'd love to hear from you.
        </p>

        <div className="contact-list">
          <ContactInfoItem label="Address" value={brand.address} />
          <ContactInfoItem label="Email" value={brand.email} href={`mailto:${brand.email}`} />
          <ContactInfoItem label="Instagram" value={brand.instagramHandle} href={brand.instagram} external />
          <ContactInfoItem label="Careers" value="Send your CV to our email." />
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
