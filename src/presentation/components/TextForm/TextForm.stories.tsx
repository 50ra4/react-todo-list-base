import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TextForm as Component } from './TextForm';
import { doNothing } from 'src/utils/forLinter';

type Props = React.ComponentProps<typeof Component>;

const PROPS: Props = {
  type: 'text',
  id: 'katakana-name',
  name: 'katakana name',
  value: 'スズキイチロウ',
  descriptions: ['名前をカタカナで入力してください'],
  label: 'お名前(カタカナ)',
  placeholder: 'ナナシノゴンベエ',
  required: true,
  onChange: doNothing,
  onBlur: doNothing,
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
      value="鈴木一郎"
      errorMessage="カタカナ以外の文字が含まれています"
    />
  ),
};
