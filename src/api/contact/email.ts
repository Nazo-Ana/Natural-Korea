import { Resend } from 'resend';
import type { ContactFormValues } from '../../types/contact';

type EmailConfig = {
  apiKey: string;
  from: string;
  to: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function buildEmailHtml(values: ContactFormValues) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0d2b1a;">
      <h2>New Natural Korea website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(values.firstName)} ${escapeHtml(values.lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(values.email)}</p>
      <p><strong>Inquiry type:</strong> ${escapeHtml(values.inquiryType)}</p>
      <hr style="border: 0; border-top: 1px solid #d9e0d8;" />
      <p>${escapeHtml(values.message).replaceAll('\n', '<br />')}</p>
    </div>
  `;
}

function buildEmailText(values: ContactFormValues) {
  return [
    'New Natural Korea website inquiry',
    '',
    `Name: ${values.firstName} ${values.lastName}`,
    `Email: ${values.email}`,
    `Inquiry type: ${values.inquiryType}`,
    '',
    values.message,
  ].join('\n');
}

export function sendContactEmail(values: ContactFormValues, config: EmailConfig) {
  const resend = new Resend(config.apiKey);

  return resend.emails.send({
    from: config.from,
    to: config.to,
    replyTo: values.email,
    subject: `Natural Korea website inquiry - ${values.inquiryType}`,
    text: buildEmailText(values),
    html: buildEmailHtml(values),
  });
}
