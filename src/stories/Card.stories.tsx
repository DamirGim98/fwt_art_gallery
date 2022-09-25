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
  imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
  year: '1998 - 2000',
};
ArtistCard.decorators = [withMaxSize];
