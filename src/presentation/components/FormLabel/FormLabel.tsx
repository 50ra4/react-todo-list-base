import React from 'react';
import { Badge } from '../Badge/Badge';

type FormLabelProps = {
  className?: string;
  htmlFor: string;
  label: string;
  required?: boolean;
};

export function FormLabel({
  className,
  htmlFor,
  label,
  required,
}: FormLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`
      text-base text-gray-900 font-bold
      text-center
      flex items-center
    ${className ?? ''}
    `}
    >
      {label}
      {!!required && <Badge className="ml-1" color="empathized" label="必須" />}
    </label>
  );
}
