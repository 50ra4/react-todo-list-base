import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PulldownForm as Component } from './PulldownForm';
import { CATEGORY_ITEMS } from 'src/const/category';

type Props = React.ComponentProps<typeof Component>;

const PROPS: Props = {
  id: 'katakana-name',
  name: 'katakana name',
  selectedId: '1',
  descriptions: ['名前をカタカナで入力してください'],
  label: 'お名前(カタカナ)',
  required: true,
  items: CATEGORY_ITEMS,
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
    <Component {...PROPS} errorMessage="カタカナ以外の文字が含まれています" />
  ),
};
