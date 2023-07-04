import React from 'react';
import { FormDescription } from '../FormDescription/FormDescription';
import { FormError } from '../FormError/FormError';
import { FormLabel } from '../FormLabel/FormLabel';

export type FormBaseProps = {
  className?: string;
  id: string;
  label: string;
  required?: boolean;
  descriptions?: string[];
  errorMessage?: string;
};

export const createDescriptionId = (id: string) => `${id}-description`;

export function FormContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`sm:flex flex-row justify-between justify-items-center ${
        className || ''
      }`}
    >
      {children}
    </div>
  );
}

export function FormLabelWithDescription({
  className,
  id,
  label,
  required,
  descriptions = [],
}: {
  className?: string;
  id: string;
  label: string;
  required?: boolean;
  descriptions?: string[];
}) {
  return (
    <div className={`basis-1/3 sm:pt-2.5 ${className || ''}`}>
      <FormLabel htmlFor={id} required={required} label={label} />
      {descriptions.length > 0 && (
        <FormDescription
          className="pt-1.5 sm:px-1.5"
          id={createDescriptionId(id)}
          descriptions={descriptions}
        />
      )}
    </div>
  );
}

export function InputWithFormError({
  className,
  errorMessage,
  children,
}: {
  className?: string;
  errorMessage?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`basis-2/3 mt-1.5 sm:mt-0 ${className || ''}`}>
      {children}
      {!!errorMessage && (
        <FormError className="mt-1.5" message={errorMessage} />
      )}
    </div>
  );
}