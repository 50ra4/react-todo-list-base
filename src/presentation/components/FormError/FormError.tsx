import React from 'react';

type FormErrorProps = {
  className?: string;
  message: string;
  // TODO: アクセシビリティに配慮したpropertyを追加する
};

export function FormError({ className, message }: FormErrorProps) {
  return <p className={`text-base text-red-600 ${className}`}>{message}</p>;
}
