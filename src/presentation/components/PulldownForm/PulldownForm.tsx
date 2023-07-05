import React from 'react';
import { FormBaseProps, FormBase } from '../FormBase/FormBase';
import { Pulldown } from '../Pulldown/Pulldown';

type Props = FormBaseProps & {
  name: string;
  items: {
    id: string;
    text: string;
  }[];
  selectedId?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.ChangeEventHandler<HTMLSelectElement>;
};

const NoMemorizedPulldownForm = React.forwardRef<HTMLSelectElement, Props>(
  function PulldownForm(
    {
      className,
      id,
      name,
      label,
      required,
      items,
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
          <Pulldown
            ref={ref}
            id={id}
            name={name}
            items={items}
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
export const PulldownForm = React.memo(NoMemorizedPulldownForm);
