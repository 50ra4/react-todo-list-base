import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button color="primary">primary</Button>,
};
export const Secondary: Story = {
  render: () => <Button color="secondary">secondary</Button>,
};
export const Disabled: Story = {
  render: () => (
    <Button color="secondary" disabled={true}>
      disabled
    </Button>
  ),
};
