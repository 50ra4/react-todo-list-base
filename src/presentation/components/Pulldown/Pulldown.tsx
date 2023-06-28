import React from 'react';
import { ArrowDropDownIcon } from '../icons/ArrowDropDownIcon';

type Props = {
  className?: string;
  id: string;
  name: string;
  items: {
    id: string;
    text: string;
  }[];
  selectedId?: string;
  isInvalid?: boolean;
  describedId?: string;
};

export const Pulldown = React.forwardRef<HTMLSelectElement, Props>(
  function Pulldown(
    { className, id, name, items, selectedId, isInvalid, describedId },
    ref,
  ) {
    return (
      <div className={`relative w-100 flex ${className || ''}`}>
        <select
          ref={ref}
          id={id}
          name={name}
          className={`
          border border-gray-300 border-solid rounded-sm
          flex-grow flex-shrink
          h-11 pl-1 pr-4
          ${isInvalid ? 'border-red-600 bg-red-200' : ''}
          appearance-none`}
          value={selectedId}
          aria-describedby={describedId}
        >
          {items.map(({ id, text }) => (
            <option key={id} value={id}>
              {text}
            </option>
          ))}
        </select>
        <ArrowDropDownIcon
          className="
          pointer-events-none
          absolute top-4 right-0
          h-4 w-4 fill-gray-800"
        />
      </div>
    );
  },
);
