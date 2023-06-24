import React from 'react';
import { joinClassNames } from 'src/utils/className';

type Props = {
  className?: string;
  label: string;
  required?: boolean;
};

export const Badge = React.memo(function Badge({
  className,
  label,
  required,
}: Props) {
  return (
    <span
      className={joinClassNames(
        'px-1.5 py-1 text-white text-xs',
        required ? 'bg-red-600' : 'bg-gray-500',
        className,
      )}
    >
      {label}
    </span>
  );
});
