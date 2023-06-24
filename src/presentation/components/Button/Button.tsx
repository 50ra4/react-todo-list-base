import React from 'react';

type ButtonProps = {
  className?: string;
  color: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button = React.forwardRef(function Button({
  className,
  color,
  disabled,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={`
      text-base
      rounded-3xl
      px-4 py-2.5
      ${
        color === 'primary'
          ? 'bg-gray-300 text-gray-800'
          : 'bg-gray-700 text-white'
      }
      ${disabled ? 'bg-opacity-50' : ''}
      ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
