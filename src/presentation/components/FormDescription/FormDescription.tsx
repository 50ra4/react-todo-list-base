import React from 'react';

type FormDescriptionProps = {
  className?: string;
  id: string;
  descriptions: string[];
};
export function FormDescription({
  className,
  id,
  descriptions,
}: FormDescriptionProps) {
  return (
    <ul id={id} className={`text-xs text-gray-600 ${className}`}>
      {descriptions.map((description) => (
        <li className="first:mt-0 mt-1" key={description}>
          <span className="mr-1">※</span>
          {description}
        </li>
      ))}
    </ul>
  );
}
