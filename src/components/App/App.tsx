import React, { useContext } from 'react';
import cn from 'classnames/bind';
import styles from './App.module.scss';
import CardGrid from '../CardGrid';
import { ThemeContext } from '../../context/context';
import Header from '../Header';
import Footer from '../Footer';

function App() {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
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
    <div className={cx('wrapper', { dark: isDarkTheme })}>
      <div className={cx('container')}>
        <Header />
        <CardGrid cards={cards} />
        <Footer />
      </div>
    </div>
  );
}
export default App;
