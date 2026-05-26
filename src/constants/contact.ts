export const CONTACT_EMAIL = 'sales@naturalkorea.company';

export const CONTACT_API_ENDPOINT = '/api/contact';

export const INQUIRY_TYPES = [
  'Partnership / Distribution',
  'Product Information',
  'Careers',
  'General Inquiry',
] as const;

export const CONTACT_LIMITS = {
  firstNameMax: 80,
  lastNameMax: 80,
  emailMax: 254,
  messageMin: 10,
  messageMax: 2000,
} as const;
