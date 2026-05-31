import type { FormEvent } from 'react';
import { useMemo, useState } from 'react';
import { INQUIRY_TYPES } from '../constants/contact';
import { ContactSubmissionError, submitContactForm } from '../services/contactService';
import type { ContactFormErrors, ContactFormValues, ContactSubmitState } from '../types/contact';
import { cx } from '../utils/classNames';
import { hasValidationErrors, normalizeContactForm, validateContactForm } from '../utils/contactValidation';

const initialValues: ContactFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  inquiryType: INQUIRY_TYPES[0],
  message: '',
  website: '',
};

export function useContactForm() {
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

  return { values, errors, isSubmitting, statusMessage, statusClassName, updateField, handleSubmit };
}
