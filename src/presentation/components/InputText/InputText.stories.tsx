import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { InputText } from './InputText';

const meta: Meta<typeof InputText> = {
  component: InputText,
};

export default meta;
type Story = StoryObj<typeof InputText>;

export const Email: Story = {
  render: () => (
    <InputText
      type="email"
      id="my-email"
      name="email"
      placeholder="入力してください"
    />
  ),
};

export const Invalid: Story = {
  render: () => (
    <InputText
      type="email"
      id="email-invalid"
      name="email"
      value="foobar"
      isInvalid={true}
    />
  ),
};
