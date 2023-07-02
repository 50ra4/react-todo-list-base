import React from 'react';

type Props = {
  className?: string;
  id: string;
  name: string;
  /** yyyy-MM-dd */
  min?: string;
  /** yyyy-MM-dd */
  max?: string;
  value?: string;
  placeholder?: string;
  isInvalid?: boolean;
  describedId?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
};

export const DateInput = React.forwardRef<HTMLInputElement, Props>(
  function DateInput(
    {
      className,
      id,
      name,
      min,
      max,
      isInvalid,
      value,
      describedId,
      onChange,
      onBlur,
    },
    ref,
  ) {
    return (
      <input
        className={`
        w-full
        border border-gray-300 border-solid
        rounded-sm
        h-11
        text-lg
        px-0.5
        ${isInvalid ? 'border-red-600 bg-red-200' : ''}
      ${className || ''}`}
        ref={ref}
        type="date"
        id={id}
        name={name}
        min={min}
        max={max}
        value={value}
        aria-describedby={describedId}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
  },
);
