import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Empathized: Story = {
  render: () => <Badge color="empathized" label="必須" />,
};
export const Grayish: Story = {
  render: () => <Badge color="grayish" label="任意" />,
};
