import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Pulldown as Component } from './Pulldown';

const items = ['grape', 'apple', 'orange'].map((value, index) => ({
  id: `${index}`,
  text: value,
}));

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    items,
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Docs: Story = {
  render: () => <Component items={items} />,
};

export const Invalid: Story = {
  render: () => <Component items={items} isInvalid={true} />,
};
