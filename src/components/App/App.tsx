import React from 'react';
import CardGrid from '../CardGrid';
import Header from '../Header';
import Footer from '../Footer';
import Wrapper from '../Wrapper';

function App() {
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
    <>
      <Header />
      <CardGrid cards={cards} />
      <Footer />
    </>
  );
}
export default App;
