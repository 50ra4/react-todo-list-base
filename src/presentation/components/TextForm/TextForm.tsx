import React from 'react';
import { FormBaseProps, FormBase } from '../FormBase/FormBase';
import { TextInput } from '../TextInput/TextInput';

type TextFormProps = FormBaseProps & {
  name: string;
  type?: 'email' | 'tel' | 'text' | 'url';
  value?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.ChangeEventHandler<HTMLInputElement>;
};

const NoMemorizedTextForm = React.forwardRef<HTMLInputElement, TextFormProps>(
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
      descriptions,
      onChange,
      onBlur,
    },
    ref,
  ) {
    return (
      <FormBase
        className={className}
        id={id}
        label={label}
        required={required}
        descriptions={descriptions}
        render={({ descriptionId }) => (
          <TextInput
            className="w-full"
            ref={ref}
            type={type}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            isInvalid={!!errorMessage}
            describedId={descriptionId}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
    );
  },
);

export const TextForm = React.memo(NoMemorizedTextForm);
