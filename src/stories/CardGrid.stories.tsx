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
ArtistGrid.args = {
  cards: [
    {
      id: 1,
      name: 'Ivan Ivanov',
      imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
      year: '1998 - 2000',
    },
    {
      id: 2,
      name: 'Ivan Alexandrovich',
      imgUrl:
        'https://wahooart.com/Art.nsf/O/8XY9BC/$File/Ivan-Aivazovsky-The-Ninth-Wave.-Study-S.JPG',
      year: '1998 - 2000',
    },
    {
      id: 3,
      name: 'Putin Vladimir',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLi362S5jfZ9baNlz2N4zNUwbDJFFLNv_GGD0KKanXFbOne1Qe4frhNjstF5n_Vhmefho&usqp=CAU',
      year: '1998 - 2000',
    },
  ],
};

export const PaintingGrid = Template.bind({});
PaintingGrid.args = {
  cards: [
    {
      id: 1,
      name: 'Beautiful forest',
      imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
      year: '1998',
    },
    {
      id: 2,
      name: 'Sea',
      imgUrl:
        'https://wahooart.com/Art.nsf/O/8XY9BC/$File/Ivan-Aivazovsky-The-Ninth-Wave.-Study-S.JPG',
      year: '1998',
    },
    {
      id: 3,
      name: 'Our president',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLi362S5jfZ9baNlz2N4zNUwbDJFFLNv_GGD0KKanXFbOne1Qe4frhNjstF5n_Vhmefho&usqp=CAU',
      year: '1998',
    },
  ],
};
