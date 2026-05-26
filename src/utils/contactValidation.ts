import { CONTACT_LIMITS, INQUIRY_TYPES } from '../constants/contact';
import type { ContactFormErrors, ContactFormValues, InquiryType } from '../types/contact';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function isInquiryType(value: string): value is InquiryType {
  return INQUIRY_TYPES.includes(value as InquiryType);
}

export function normalizeContactForm(input: Record<string, unknown>): ContactFormValues {
  const inquiryType = readString(input.inquiryType);

  return {
    firstName: readString(input.firstName),
    lastName: readString(input.lastName),
    email: readString(input.email).toLowerCase(),
    inquiryType: isInquiryType(inquiryType) ? inquiryType : INQUIRY_TYPES[0],
    message: readString(input.message),
    website: readString(input.website),
  };
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.firstName) {
    errors.firstName = 'First name is required.';
  } else if (values.firstName.length > CONTACT_LIMITS.firstNameMax) {
    errors.firstName = `First name must be ${CONTACT_LIMITS.firstNameMax} characters or less.`;
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is required.';
  } else if (values.lastName.length > CONTACT_LIMITS.lastNameMax) {
    errors.lastName = `Last name must be ${CONTACT_LIMITS.lastNameMax} characters or less.`;
  }

  if (!values.email) {
    errors.email = 'Email address is required.';
  } else if (values.email.length > CONTACT_LIMITS.emailMax || !emailPattern.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!isInquiryType(values.inquiryType)) {
    errors.inquiryType = 'Choose a valid inquiry type.';
  }

  if (!values.message) {
    errors.message = 'Message is required.';
  } else if (values.message.length < CONTACT_LIMITS.messageMin) {
    errors.message = `Message must be at least ${CONTACT_LIMITS.messageMin} characters.`;
  } else if (values.message.length > CONTACT_LIMITS.messageMax) {
    errors.message = `Message must be ${CONTACT_LIMITS.messageMax} characters or less.`;
  }

  return errors;
}

export function hasValidationErrors(errors: ContactFormErrors) {
  return Object.keys(errors).length > 0;
}
