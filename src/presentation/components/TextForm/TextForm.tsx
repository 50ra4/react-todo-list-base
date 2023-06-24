import React from 'react';
import { FormDescription } from '../FormDescription/FormDescription';
import { FormError } from '../FormError/FormError';
import { FormLabel } from '../FormLabel/FormLabel';
import { TextInput } from '../TextInput/TextInput';

type TextFormProps = {
  className?: string;
  type?: 'email' | 'tel' | 'text' | 'url';
  id: string;
  name: string;
  label: string;
  errorMessage?: string;
  descriptions?: string[];
  required?: boolean;
  value?: string;
  placeholder?: string;
};

export const TextForm = React.forwardRef<HTMLInputElement, TextFormProps>(
  function TextForm(
    {
      className,
      type,
      id,
      name,
      label,
      required,
      value,
      placeholder,
      errorMessage,
      descriptions = [],
    },
    ref,
  ) {
    return (
      <div
        className={`
      sm:flex flex-row justify-between justify-items-center
      ${className}`}
      >
        <div className="basis-1/3">
          <FormLabel
            htmlFor={id}
            formType={required ? 'required' : 'none'}
            label={label}
          />
          <FormDescription className="pt-1.5" descriptions={descriptions} />
        </div>
        <div className="basis-2/3 mt-3 sm:mt-0">
          <TextInput
            className="w-full"
            ref={ref}
            type={type}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            isInvalid={!!errorMessage}
          />
          {!!errorMessage && <FormError message={errorMessage} />}
        </div>
      </div>
    );
  },
);
