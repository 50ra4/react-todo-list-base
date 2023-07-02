import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Pulldown as Component } from './Pulldown';
import { CATEGORY_ITEMS } from 'src/const/category';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    items: CATEGORY_ITEMS,
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Docs: Story = {
  render: () => (
    <Component id="pulldown-docs" name="fruit" items={CATEGORY_ITEMS} />
  ),
};

export const Invalid: Story = {
  render: () => (
    <Component
      id="pulldown-invalid"
      name="fruit"
      items={CATEGORY_ITEMS}
      isInvalid={true}
    />
  ),
};
