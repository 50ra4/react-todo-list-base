import React from 'react';
import { ArrowDropDownIcon } from '../icons/ArrowDropDownIcon';

type Props = {
  className?: string;
  items: {
    id: string;
    text: string;
  }[];
  selectedId?: string;
};

export const Pulldown = React.forwardRef<HTMLSelectElement, Props>(
  function Pulldown({ className, items, selectedId }, ref) {
    return (
      <div className={`relative w-100 flex ${className || ''}`}>
        <select
          className="
          border border-gray-300 border-solid rounded-sm
          flex-grow flex-shrink
          h-11 pl-1 pr-4
          appearance-none"
          ref={ref}
          value={selectedId}
        >
          {items.map(({ id, text }) => (
            <option key={id} value={id}>
              {text}
            </option>
          ))}
        </select>
        <ArrowDropDownIcon
          className="pointer-events-none
        absolute top-4 right-0
        h-4 w-4 fill-gray-800"
        />
      </div>
    );
  },
);
