import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { DateInput as Component } from './DateInput';

type Props = React.ComponentProps<typeof Component>;

const PROPS: Props = {
  id: 'date-input',
  name: 'date-input',
};

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    ...PROPS,
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Docs: Story = {
  render: () => (
    <Component
      {...PROPS}
      id="docs"
      placeholder="入力してください"
      value="2023-07-02"
    />
  ),
};

export const Invalid: Story = {
  render: () => <Component {...PROPS} id="invalid" isInvalid={true} />,
};
