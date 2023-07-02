import React from 'react';
import { DateInput } from '../DateInput/DateInput';
import { FormDescription } from '../FormDescription/FormDescription';
import { FormError } from '../FormError/FormError';
import { FormLabel } from '../FormLabel/FormLabel';

type Props = {
  className?: string;
  id: string;
  name: string;
  label: string;
  errorMessage?: string;
  descriptions?: string[];
  required?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
};

export const DateForm = React.forwardRef<HTMLInputElement, Props>(
  function DateForm(
    {
      className,
      id,
      name,
      label,
      required,
      value,
      errorMessage,
      descriptions = [],
      onChange,
      onBlur,
    },
    ref,
  ) {
    const descriptionId = `${id}-description`;

    return (
      <div
        className={`sm:flex flex-row justify-between justify-items-center ${
          className ?? ''
        }`}
      >
        <div className="basis-1/3 sm:pt-2.5">
          <FormLabel htmlFor={id} required={required} label={label} />
          {descriptions.length > 0 && (
            <FormDescription
              className="pt-1.5 sm:px-1.5"
              id={descriptionId}
              descriptions={descriptions}
            />
          )}
        </div>
        <div className="basis-2/3 mt-1.5 sm:mt-0">
          <DateInput
            className="w-full"
            ref={ref}
            id={id}
            name={name}
            value={value}
            isInvalid={!!errorMessage}
            describedId={descriptionId}
            onChange={onChange}
            onBlur={onBlur}
          />
          {!!errorMessage && (
            <FormError className="mt-1.5" message={errorMessage} />
          )}
        </div>
      </div>
    );
  },
);
