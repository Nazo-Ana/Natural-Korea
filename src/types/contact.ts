import type { INQUIRY_TYPES } from '../constants/contact';

export type InquiryType = (typeof INQUIRY_TYPES)[number];

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  inquiryType: InquiryType;
  message: string;
  website?: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export type ContactApiResponse =
  | {
      ok: true;
      message: string;
    }
  | {
      ok: false;
      message: string;
      errors?: ContactFormErrors;
    };

export type ContactSubmitState = 'idle' | 'submitting' | 'success' | 'error';
