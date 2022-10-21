import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import Card from '../components/Card';

const withMaxSize: DecoratorFn = (StoryFn) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40 }}>
      <StoryFn />
    </div>
  );
};

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    name: {
      control: 'text',
    },
    year: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    theme: {
      control: 'select',
      options: [true, false],
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ ...args }) => <Card {...args} />;

export const ArtistCard = Template.bind({});
ArtistCard.args = {
  id: 1,
  name: 'Ivan Ivanov',
  img: {
    _id: '1aasdadaqvc',
    src: '',
    src2x: '',
    webp: 'https://www.gstatic.com/webp/gallery/1.sm.webp',
    webp2x: 'https://www.gstatic.com/webp/gallery/1.sm.webp',
  },
  year: '1998 - 2000',
};
ArtistCard.decorators = [withMaxSize];
