import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Required: Story = {
  render: () => <Badge required={true} label="必須" />,
};
export const Optional: Story = {
  render: () => <Badge label="任意" />,
};
