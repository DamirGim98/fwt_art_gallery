import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../components/UI/Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
    },
    theme: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ ...args }) => <Button {...args} />;

export const MultiUse = Template.bind({});
MultiUse.args = {
  variant: 'outlined',
  theme: true,
  children: 'Click me',
};
