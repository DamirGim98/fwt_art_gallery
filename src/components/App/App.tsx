import React from 'react';
import cn from 'classnames/bind';
import styles from './App.module.scss';
import CardGrid from '../CardGrid';

function App() {
  const cx = cn.bind(styles);
  const theme = false;
  const cards = [
    {
      id: 1,
      name: 'Ivan Ivanov',
      imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
      year: '1998-1999',
    },
    {
      id: 2,
      name: 'Ivan Ivanov',
      imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
      year: '1998-1999',
    },
    {
      id: 3,
      name: 'Anton Anton ',
      imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
      year: '1998-1999',
    },
    {
      id: 4,
      name: 'Sergey Sergeev',
      imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
      year: '1998-1999',
    },
  ];
  return (
    <div className={cx('wrapper', { dark: theme })}>
      <CardGrid cards={cards} DarkTheme={theme} />
    </div>
  );
}
export default App;
