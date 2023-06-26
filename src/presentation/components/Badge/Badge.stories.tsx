import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  args: {
    label: '必須',
    color: 'empathized',
  },
  parameters: {
    docs: {
      description: {
        component: 'Badgeコンポーネント。主にFormのラベル横に表示する。',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Empathized: Story = {
  render: () => <Badge color="empathized" label="必須" />,
};
export const Grayish: Story = {
  render: () => <Badge color="grayish" label="任意" />,
};
