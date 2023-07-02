import React from 'react';
import { FormDescription } from '../FormDescription/FormDescription';
import { FormError } from '../FormError/FormError';
import { FormLabel } from '../FormLabel/FormLabel';
import { Pulldown } from '../Pulldown/Pulldown';

type Props = {
  className?: string;
  id: string;
  name: string;
  label: string;
  items: {
    id: string;
    text: string;
  }[];
  selectedId?: string;
  errorMessage?: string;
  descriptions?: string[];
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.ChangeEventHandler<HTMLSelectElement>;
};

export const PulldownForm = React.forwardRef<HTMLSelectElement, Props>(
  function PulldownForm(
    {
      className,
      id,
      name,
      label,
      required,
      items,
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
          {!!errorMessage && (
            <FormError className="mt-1.5" message={errorMessage} />
          )}
        </div>
      </div>
    );
  },
);
