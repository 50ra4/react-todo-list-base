import React from 'react';

type TextareaProps = {
  className?: string;
  id: string;
  name: string;
  value?: string;
  placeholder?: string;
  isInvalid?: boolean;
  describedId?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      className,
      id,
      name,
      placeholder,
      isInvalid,
      value,
      describedId,
      onChange,
      onBlur,
    },
    ref,
  ) {
    return (
      <textarea
        ref={ref}
        className={`border border-gray-300 border-solid rounded-sm
        w-full h-24 resize-y
        text-lg
        py-0.5 px-1
        ${isInvalid ? 'border-red-600 bg-red-200' : ''}
        ${className || ''}`}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        aria-describedby={describedId}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
  },
);
