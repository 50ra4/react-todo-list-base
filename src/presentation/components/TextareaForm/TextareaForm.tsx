import React from 'react';
import { FormBaseProps, FormBase } from '../FormBase/FormBase';
import { Textarea } from '../Textarea/Textarea';

type TextareaFormProps = FormBaseProps & {
  name: string;
  value?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const NoMemorizedTextForm = React.forwardRef<
  HTMLTextAreaElement,
  TextareaFormProps
>(function TextareaForm(
  {
    className,
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
      errorMessage={errorMessage}
      descriptions={descriptions}
      render={({ descriptionId }) => (
        <Textarea
          ref={ref}
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
});

export const TextareaForm = React.memo(NoMemorizedTextForm);
