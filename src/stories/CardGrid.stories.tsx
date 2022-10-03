import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardGrid from '../components/CardGrid';

export default {
  title: 'Components/Grid',
  component: CardGrid,
  argTypes: {
    DarkTheme: {
      control: 'select',
      options: [true, false],
    },
  },
} as ComponentMeta<typeof CardGrid>;

const Template: ComponentStory<typeof CardGrid> = ({ ...args }) => <CardGrid {...args} />;

export const ArtistGrid = Template.bind({});
ArtistGrid.args = {};

export const PaintingGrid = Template.bind({});
PaintingGrid.args = {};
