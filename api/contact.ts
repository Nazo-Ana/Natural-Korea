import { Resend } from 'resend';
import { CONTACT_EMAIL } from '../src/constants/contact';
import type { ContactApiResponse } from '../src/types/contact';
import { hasValidationErrors, normalizeContactForm, validateContactForm } from '../src/utils/contactValidation';

type JsonObject = Record<string, unknown>;

type ServerlessRequest = {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
  socket?: {
    remoteAddress?: string;
  };
};

type ServerlessResponse = {
  status(statusCode: number): ServerlessResponse;
  json(body: ContactApiResponse): void;
  setHeader(name: string, value: string): void;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const rateLimits = new Map<string, RateLimitEntry>();

function getRequestIp(request: ServerlessRequest) {
  const forwardedFor = request.headers['x-forwarded-for'];
  const firstForwardedIp = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor;
  return firstForwardedIp?.split(',')[0]?.trim() || request.socket?.remoteAddress || 'unknown';
}

function isRateLimited(ipAddress: string) {
  const now = Date.now();
  const current = rateLimits.get(ipAddress);

  if (!current || current.resetAt <= now) {
    rateLimits.set(ipAddress, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function parseBody(body: unknown): JsonObject | null {
  if (!body) return null;
  if (typeof body === 'string') {
    try {
      const parsed = JSON.parse(body) as unknown;
      return typeof parsed === 'object' && parsed !== null ? (parsed as JsonObject) : null;
    } catch {
      return null;
    }
  }

  return typeof body === 'object' ? (body as JsonObject) : null;
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function buildEmailHtml(values: ReturnType<typeof normalizeContactForm>) {
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

function buildEmailText(values: ReturnType<typeof normalizeContactForm>) {
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

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: values.email,
    subject: `Natural Korea website inquiry - ${values.inquiryType}`,
    text: buildEmailText(values),
    html: buildEmailHtml(values),
  });

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
