import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

type BaseFieldProps = {
  error?: string;
  children: ReactNode;
};

export function FieldShell({ error, children }: BaseFieldProps) {
  return (
    <label>
      {children}
      {error ? <span className="form-error">{error}</span> : null}
    </label>
  );
}

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export function TextInput({ error, ...props }: TextInputProps) {
  return (
    <FieldShell error={error}>
      <span className="sr-only">{props['aria-label']}</span>
      <input aria-invalid={Boolean(error)} {...props} />
    </FieldShell>
  );
}

type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
  options: readonly string[];
};

export function SelectInput({ error, options, ...props }: SelectInputProps) {
  return (
    <FieldShell error={error}>
      <span className="sr-only">{props['aria-label']}</span>
      <select aria-invalid={Boolean(error)} {...props}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </FieldShell>
  );
}

type TextAreaInputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
};

export function TextAreaInput({ error, ...props }: TextAreaInputProps) {
  return (
    <FieldShell error={error}>
      <span className="sr-only">{props['aria-label']}</span>
      <textarea aria-invalid={Boolean(error)} {...props} />
    </FieldShell>
  );
}
