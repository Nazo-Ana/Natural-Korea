import { useContactForm } from '../../hooks/useContactForm';
import { SelectInput, TextAreaInput, TextInput } from './FormField';
import { INQUIRY_TYPES } from '../../constants/contact';

export default function ContactForm() {
  const { values, errors, isSubmitting, statusMessage, statusClassName, updateField, handleSubmit } = useContactForm();

  return (
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
  );
}
