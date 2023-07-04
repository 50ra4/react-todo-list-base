import React from 'react';
import { FormDescription } from './FormDescription/FormDescription';
import { FormError } from './FormError/FormError';
import { FormLabel } from './FormLabel/FormLabel';
import { Expand } from 'src/utils/utilityType';

type InputOnlyProps = {
  isInvalid?: boolean;
  describedId?: string;
};

type InputProps<Element extends HTMLElement> = Expand<
  {
    className?: string;
    id: string;
    name: string;
    onChange?: React.ChangeEventHandler<Element>;
    onBlur?: React.ChangeEventHandler<Element>;
  } & InputOnlyProps
>;

type FormProps<
  Element extends HTMLElement,
  Props extends InputProps<Element>,
> = Omit<Props, keyof InputOnlyProps> & {
  className?: string;
  label: string;
  errorMessage?: string;
  descriptions?: string[];
  required?: boolean;
};

export const withForm = <
  Element extends HTMLElement,
  Props extends InputProps<Element> = any,
>(
  Component: React.ForwardRefExoticComponent<
    Props & React.RefAttributes<Element>
  >,
) => {
  const WrapperComponent = React.forwardRef<Element, FormProps<Element, Props>>(
    (
      { className, label, descriptions = [], errorMessage, required, ...props },
      ref,
    ) => {
      const descriptionId = `${props.id}-description`;

      return (
        <div
          className={`sm:flex flex-row justify-between justify-items-center ${
            className ?? ''
          }`}
        >
          <div className="basis-1/3 sm:pt-2.5">
            <FormLabel htmlFor={props.id} required={required} label={label} />
            {descriptions.length > 0 && (
              <FormDescription
                className="pt-1.5 sm:px-1.5"
                id={descriptionId}
                descriptions={descriptions}
              />
            )}
          </div>
          <div className="basis-2/3 mt-1.5 sm:mt-0">
            <Component
              // FIXME:
              {...(props as unknown as Props)}
              className="w-full"
              ref={ref}
              isInvalid={!!errorMessage}
              describedId={descriptionId}
            />
            {!!errorMessage && (
              <FormError className="mt-1.5" message={errorMessage} />
            )}
          </div>
        </div>
      );
    },
  );

  WrapperComponent.displayName = `${
    Component.displayName || Component.name || 'NoName'
  }WithForm`;

  return WrapperComponent;
};
