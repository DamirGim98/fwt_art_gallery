import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardGrid from '../components/CardGrid';

export default {
  title: 'Components/Grid',
  component: CardGrid,
} as ComponentMeta<typeof CardGrid>;

export const Default: ComponentStory<typeof CardGrid> = ({ ...args }) => {
  return <CardGrid {...args} cards={args.cards} DarkTheme={args.DarkTheme} />;
};

Default.args = {
  cards: [
    {
      id: 1,
      title: 'Ivan Ivanov',
      name: 'Ivan',
      imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
      year: '1998 - 2000',
    },
    {
      id: 2,
      title: 'Ivan Ivanov',
      name: 'Ivan',
      imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
      year: '1998 - 2000',
    },
    {
      id: 4,
      title: 'Ivan Ivanov',
      name: 'Ivan',
      imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
      year: '1998 - 2000',
    },
  ],
  DarkTheme: true,
};
