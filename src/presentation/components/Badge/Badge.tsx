import React from 'react';
import { joinClassNames } from '@/utils/className';

type Props = {
  className?: string;
  /** Badgeに表示する文字列 */
  label: string;
  color: 'empathized' | 'grayish';
};

export const Badge = React.memo(function Badge({
  className,
  label,
  color,
}: Props) {
  return (
    <span
      className={joinClassNames(
        'px-1.5 py-1 text-white text-xs',
        color === 'empathized' ? 'bg-red-600' : 'bg-gray-500',
        className,
      )}
    >
      {label}
    </span>
  );
});
