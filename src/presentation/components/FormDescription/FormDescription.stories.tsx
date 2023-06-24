import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { FormDescription as Component } from './FormDescription';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    id: 'description',
    descriptions: ['名前をカタカナで入力してください'],
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Messages: Story = {
  render: () => (
    <Component
      id="description"
      descriptions={[
        '半角数字で入力してください',
        '1以上10未満の数字を入力してください',
      ]}
    />
  ),
};
