import React from 'react';
import { Badge } from '../Badge/Badge';

type FormLabelProps = {
  className?: string;
  htmlFor: string;
  label: string;
  formType: 'required' | 'optional' | 'none';
};

export function FormLabel({
  className,
  htmlFor,
  label,
  formType,
}: FormLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`
      text-base text-gray-900 font-bold
      text-center
      flex items-center
    ${className}
    `}
    >
      {formType !== 'none' && (
        <Badge
          className="mr-1"
          required={formType === 'required'}
          label={formType === 'required' ? '必須' : '任意'}
        />
      )}
      {label}
    </label>
  );
}
