import React from 'react';

type InputTextProps = {
  className?: string;
  type?: 'email' | 'tel' | 'text' | 'url';
  id: string;
  name: string;
  value?: string;
  placeholder?: string;
  isInvalid?: boolean;
};

/**
 * FIXME: TextInputに名前を変更する
 */
export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  function InputText(
    { className, id, name, type = 'text', placeholder, isInvalid, value },
    ref,
  ) {
    return (
      <input
        className={`
        border border-gray-300 border-solid
        rounded-sm
        h-11
        text-lg
        px-0.5
        ${isInvalid ? 'border-red-600 bg-red-200' : ''}
      ${className}`}
        ref={ref}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    );
  },
);
