import type { FormEvent } from 'react';
import { useMemo, useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { SelectInput, TextAreaInput, TextInput } from '../components/ui/FormField';
import { INQUIRY_TYPES } from '../constants/contact';
import { brand } from '../constants/siteContent';
import { submitContactForm, ContactSubmissionError } from '../services/contactService';
import type { ContactFormErrors, ContactFormValues, ContactSubmitState } from '../types/contact';
import { normalizeContactForm, validateContactForm, hasValidationErrors } from '../utils/contactValidation';
import { cx } from '../utils/classNames';

type ContactItemProps = {
  label: string;
  value: string | string[];
  href?: string;
  external?: boolean;
};

const initialValues: ContactFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  inquiryType: INQUIRY_TYPES[0],
  message: '',
  website: '',
};

export default function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitState, setSubmitState] = useState<ContactSubmitState>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const isSubmitting = submitState === 'submitting';
  const statusClassName = useMemo(
    () => cx('form-status', submitState === 'success' && 'success', submitState === 'error' && 'error'),
    [submitState],
  );

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedValues = normalizeContactForm(values);
    const nextErrors = validateContactForm(normalizedValues);

    setValues(normalizedValues);
    setErrors(nextErrors);

    if (hasValidationErrors(nextErrors)) {
      setSubmitState('error');
      setStatusMessage('Please fix the highlighted fields and try again.');
      return;
    }

    setSubmitState('submitting');
    setStatusMessage('Sending your message...');

    try {
      const response = await submitContactForm(normalizedValues);
      setSubmitState('success');
      setStatusMessage(response.message);
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      setSubmitState('error');

      if (error instanceof ContactSubmissionError) {
        setStatusMessage(error.message);
        setErrors(error.errors ?? {});
        return;
      }

      setStatusMessage('Something went wrong while sending your message. Please try again.');
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

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <h3>Send a Message</h3>

        <input
          className="form-honeypot"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateField('website', event.target.value)}
          aria-hidden="true"
        />

        <div className="form-row">
          <TextInput
            name="firstName"
            type="text"
            placeholder="First Name"
            aria-label="First name"
            autoComplete="given-name"
            required
            value={values.firstName}
            error={errors.firstName}
            onChange={(event) => updateField('firstName', event.target.value)}
          />
          <TextInput
            name="lastName"
            type="text"
            placeholder="Last Name"
            aria-label="Last name"
            autoComplete="family-name"
            required
            value={values.lastName}
            error={errors.lastName}
            onChange={(event) => updateField('lastName', event.target.value)}
          />
        </div>

        <TextInput
          name="email"
          type="email"
          placeholder="Email Address"
          aria-label="Email address"
          autoComplete="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(event) => updateField('email', event.target.value)}
        />

        <SelectInput
          name="inquiryType"
          aria-label="Inquiry type"
          options={INQUIRY_TYPES}
          value={values.inquiryType}
          error={errors.inquiryType}
          onChange={(event) => updateField('inquiryType', event.target.value)}
        />

        <TextAreaInput
          name="message"
          placeholder="Your Message..."
          aria-label="Your message"
          required
          value={values.message}
          error={errors.message}
          onChange={(event) => updateField('message', event.target.value)}
        />

        <button className="form-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {statusMessage ? (
          <p className={statusClassName} role="status" aria-live="polite">
            {statusMessage}
          </p>
        ) : null}
      </form>
    </section>
  );
}

function ContactItem({ label, value, href, external = false }: ContactItemProps) {
  const content = Array.isArray(value) ? value.map((line) => <span key={line}>{line}</span>) : value;

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
