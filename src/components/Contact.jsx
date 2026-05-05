import { useState } from 'react';
import SectionHeading from './SectionHeading.jsx';
import { brand } from '../data/siteContent.js';

const inquiryTypes = ['Partnership / Distribution', 'Product Information', 'Careers', 'General Inquiry'];
const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();

function buildEmailLink(data) {
  const subject = `Natural Korea website inquiry - ${data.inquiryType}`;
  const body = [
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Inquiry type: ${data.inquiryType}`,
    '',
    data.message,
  ].join('\n');

  return `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const openEmailFallback = () => {
      window.location.href = buildEmailLink(data);
      setStatus('Your email app should open with the message ready to send.');
    };

    if (!formEndpoint) {
      openEmailFallback();
      return;
    }

    setStatus('Sending...');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Message sent successfully.');
        form.reset();
      } else {
        openEmailFallback();
      }
    } catch (error) {
      openEmailFallback();
    }
  };

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
          <ContactItem label="Address" value={brand.address} />
          <ContactItem label="Email" value={brand.email} href={`mailto:${brand.email}`} />
          <ContactItem label="Instagram" value={brand.instagramHandle} href={brand.instagram} external />
          <ContactItem label="Careers" value="Send your CV to our email." />
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send a Message</h3>

        <div className="form-row">
          <input name="firstName" type="text" placeholder="First Name" required />
          <input name="lastName" type="text" placeholder="Last Name" required />
        </div>

        <input name="email" type="email" placeholder="Email Address" required />

        <select name="inquiryType" defaultValue={inquiryTypes[0]}>
          {inquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        <textarea name="message" placeholder="Your Message..." required />

        <button className="form-submit" type="submit">
          Send Message
        </button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}

function ContactItem({ label, value, href, external = false }) {
  const content = Array.isArray(value)
    ? value.map((line) => <span key={line}>{line}</span>)
    : value;

  return (
    <div className="contact-item">
      <span>{label.slice(0, 2).toUpperCase()}</span>
      <div>
        <p>{label}</p>
        {href ? (
          <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
            {content}
          </a>
        ) : (
          <strong>{content}</strong>
        )}
      </div>
    </div>
  );
}
