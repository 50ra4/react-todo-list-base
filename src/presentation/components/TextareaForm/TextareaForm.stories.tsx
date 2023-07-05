import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TextareaForm as Component } from './TextareaForm';
import { doNothing } from 'src/utils/forLinter';

type Props = React.ComponentProps<typeof Component>;

const PROPS: Props = {
  id: 'textarea-form-docs',
  name: 'comments',
  value: `いつも楽しみにしています。\nこれからも頑張ってください！！`,
  placeholder: '自由に入力してください',
  descriptions: ['名前をカタカナで入力してください'],
  label: 'コメント欄',
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
      value=""
      errorMessage="応援コメントを書いてください"
    />
  ),
};
