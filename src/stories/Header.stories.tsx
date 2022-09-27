import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from '../components/Header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({ ...args }) => <Header {...args} />;

export const MyHeader = Template.bind({});
MyHeader.args = {
  user: { name: 'Damir' },
};
