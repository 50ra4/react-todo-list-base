import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Textarea as Component } from './Textarea';
import { doNothing } from '@/utils/forLinter';

type Props = React.ComponentProps<typeof Component>;

const PROPS: Props = {
  id: 'textarea',
  name: 'comments',
  value: `いつも楽しみにしています。\nこれからも頑張ってください！！`,
  placeholder: '自由に入力してください',
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
  render: () => <Component {...PROPS} isInvalid={true} />,
};
