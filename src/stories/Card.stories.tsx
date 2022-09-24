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
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ ...args }) => <Card {...args} />;

export const ArtistCard = Template.bind({});
ArtistCard.args = {
  card: {
    id: 1,
    name: 'Ivan Ivanov',
    imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
    year: '1998 - 2000',
  },
};
ArtistCard.decorators = [withMaxSize];
