import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from '../components/UI/Link';

export {};
export default {
  title: 'UI/Link',
  component: Link,
  argTypes: {
    theme: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = ({ ...args }) => <Link {...args} />;

export const CustomLink = Template.bind({});
CustomLink.args = {
  theme: true,
  link: 'https://www.youtube.com/',
  children: 'Click me',
};
