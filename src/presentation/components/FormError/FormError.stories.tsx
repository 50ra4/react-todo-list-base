import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { FormError as Component } from './FormError';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    message: '名前をカタカナで入力してください',
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const ErrorMessage: Story = {
  render: () => <Component message="半角数字で入力してください" />,
};
