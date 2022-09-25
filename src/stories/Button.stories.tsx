import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../components/UI/Button';
import Card from '../components/Card';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      description: 'Do not pass children element if planning to use icon buttons!',
      control: 'select',
    },
    theme: {
      description: 'This prop allows to choose color settings',
      control: 'boolean',
    },
    isDisabled: {
      description: 'Disabled property for the button both action and styling',
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
