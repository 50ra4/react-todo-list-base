import React from 'react';

type FormDescriptionProps = {
  className?: string;
  descriptions: string[];
  // TODO: アクセシビリティに配慮したpropertyを追加する
};
export function FormDescription({
  className,
  descriptions,
}: FormDescriptionProps) {
  return (
    <ul className={`text-xs text-gray-600 ${className}`}>
      {descriptions.map((description) => (
        // FIXME: 上手くmarginが入らない
        <li className="first:mt-0 mt-1" key={description}>
          <span className="mr-1">※</span>
          {description}
        </li>
      ))}
    </ul>
  );
}
