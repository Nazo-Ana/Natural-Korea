import { CONTACT_EMAIL } from '../src/constants/contact';
import { getRequestIp, isRateLimited, parseBody, sendContactEmail } from '../src/api/contact';
import type { ServerlessRequest, ServerlessResponse } from '../src/api/contact';
import { hasValidationErrors, normalizeContactForm, validateContactForm } from '../src/utils/contactValidation';

export default async function handler(request: ServerlessRequest, response: ServerlessResponse) {
  response.setHeader('Cache-Control', 'no-store');

  if (request.method !== 'POST') {
    response.status(405).json({ ok: false, message: 'Method not allowed.' });
    return;
  }

  const ipAddress = getRequestIp(request);

  if (isRateLimited(ipAddress)) {
    response.status(429).json({ ok: false, message: 'Please wait a minute before sending another message.' });
    return;
  }

  const body = parseBody(request.body);

  if (!body) {
    response.status(400).json({ ok: false, message: 'Invalid request body.' });
    return;
  }

  const values = normalizeContactForm(body);

  if (values.website) {
    response.status(200).json({ ok: true, message: 'Thank you. Your message has been received.' });
    return;
  }

  const errors = validateContactForm(values);

  if (hasValidationErrors(errors)) {
    response.status(400).json({
      ok: false,
      message: 'Please fix the highlighted fields and try again.',
      errors,
    });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? CONTACT_EMAIL;

  if (!apiKey || !from) {
    response.status(500).json({
      ok: false,
      message: 'Contact form is not configured yet. Please email sales@naturalkorea.company directly.',
    });
    return;
  }

  const { error } = await sendContactEmail(values, { apiKey, from, to });

  if (error) {
    console.error('Resend contact form error', error);
    response.status(502).json({
      ok: false,
      message: 'We could not send your message right now. Please try again shortly.',
    });
    return;
  }

  response.status(200).json({ ok: true, message: 'Message sent successfully. We will get back to you soon.' });
}
