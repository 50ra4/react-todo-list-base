import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormLabel } from './FormLabel';

const meta: Meta<typeof FormLabel> = {
  component: FormLabel,
};

export default meta;
type Story = StoryObj<typeof FormLabel>;

export const Required: Story = {
  render: () => (
    <FormLabel htmlFor="required" required={true} label="必須項目" />
  ),
};
export const Optional: Story = {
  render: () => <FormLabel htmlFor="optional" label="任意項目" />,
};
