import { CONTACT_API_ENDPOINT } from '../constants/contact';
import type { ContactApiResponse, ContactFormErrors, ContactFormValues } from '../types/contact';

export class ContactSubmissionError extends Error {
  errors?: ContactFormErrors;

  constructor(message: string, errors?: ContactFormErrors) {
    super(message);
    this.name = 'ContactSubmissionError';
    this.errors = errors;
  }
}

export async function submitContactForm(values: ContactFormValues) {
  const response = await fetch(CONTACT_API_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  const payload = (await response.json().catch(() => null)) as ContactApiResponse | null;

  if (!response.ok || !payload?.ok) {
    throw new ContactSubmissionError(
      payload?.message ?? 'We could not send your message. Please try again.',
      payload?.ok === false ? payload.errors : undefined,
    );
  }

  return payload;
}
