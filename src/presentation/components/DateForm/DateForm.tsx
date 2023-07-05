import React from 'react';
import { DateInput } from '../DateInput/DateInput';
import { FormBase, FormBaseProps } from '../FormBase/FormBase';

type Props = FormBaseProps & {
  name: string;
  value?: string;
  range?: { min?: string; max?: string };
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.ChangeEventHandler<HTMLInputElement>;
};

const NoMemorizedDateForm = React.forwardRef<HTMLInputElement, Props>(
  function DateForm(
    {
      className,
      id,
      name,
      label,
      required,
      errorMessage,
      descriptions,
      range: { min, max } = {},
      onChange,
      onBlur,
    },
    ref,
  ) {
    return (
      <FormBase
        id={id}
        className={className}
        label={label}
        required={required}
        descriptions={descriptions}
        errorMessage={errorMessage}
        render={({ descriptionId }) => (
          <DateInput
            ref={ref}
            id={id}
            name={name}
            min={min}
            max={max}
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

export const DateForm = React.memo(NoMemorizedDateForm);
