import React from 'react';
import {
  FormContainer,
  FormLabelWithDescription,
  InputWithFormError,
  createDescriptionId,
} from './FormBase/FormBase';
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
      { className, label, descriptions, errorMessage, required, ...props },
      ref,
    ) => {
      return (
        <FormContainer className={className}>
          <FormLabelWithDescription
            id={props.id}
            required={required}
            label={label}
            descriptions={descriptions}
          />
          <InputWithFormError errorMessage={errorMessage}>
            <Component
              // FIXME:
              {...(props as unknown as Props)}
              className="w-full"
              ref={ref}
              isInvalid={!!errorMessage}
              describedId={createDescriptionId(props.id)}
            />
          </InputWithFormError>
        </FormContainer>
      );
    },
  );

  WrapperComponent.displayName = `${
    Component.displayName || Component.name || 'NoName'
  }WithForm`;

  return WrapperComponent;
};
