import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Docs: Story = {
  render: () => (
    <TextInput
      type="email"
      id="my-email"
      name="email"
      placeholder="入力してください"
    />
  ),
};

export const Invalid: Story = {
  render: () => (
    <TextInput
      type="email"
      id="email-invalid"
      name="email"
      value="foobar"
      isInvalid={true}
    />
  ),
};
