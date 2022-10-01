import React, { FC, useContext } from 'react';
import cn from 'classnames/bind';
import { ICard } from '../../types/types';
import Card from '../Card/Card';
import styles from './Grid.module.scss';
import { ThemeContext } from '../../context/context';

interface CardGridProps {
  cards: ICard[];
}

const CardGrid: FC<CardGridProps> = ({ cards }) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className={cx('grid')}>
      <div className={cx('grid__container')}>
        {cards.map((card) => (
          <Card {...card} key={card.id} theme={isDarkTheme} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
