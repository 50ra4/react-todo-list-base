import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { DateForm as Component } from './DateForm';

type Props = React.ComponentProps<typeof Component>;

const PROPS: Props = {
  id: 'date-form',
  name: 'date-form',
  descriptions: ['今日の日付を入力してください'],
  label: '成約日',
  required: true,
};

const meta: Meta<typeof Component> = {
  component: Component,
  args: { ...PROPS },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Docs: Story = {
  render: () => <Component {...PROPS} />,
};

export const Error: Story = {
  render: () => (
    <Component
      {...PROPS}
      id="date-form-error"
      errorMessage="今日の日付を入力してください"
    />
  ),
};
