import React from 'react';

type FormErrorProps = {
  className?: string;
  message: string;
};

export function FormError({ className, message }: FormErrorProps) {
  return (
    <p
      role="alert"
      aria-live="assertive"
      className={`text-base text-red-600 ${className}`}
    >
      {message}
    </p>
  );
}
