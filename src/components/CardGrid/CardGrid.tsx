import React, { FC } from 'react';
import cn from 'classnames/bind';
import { ICard } from '../../types/types';
import Card from '../Card/Card';
import styles from './Grid.module.scss';

interface CardGridProps {
  cards: ICard[];
  DarkTheme?: boolean;
}

const CardGrid: FC<CardGridProps> = ({ cards, DarkTheme }) => {
  const cx = cn.bind(styles);
  return (
    <div className={cx('grid')}>
      <div className={cx('grid__container')}>
        {cards.map((card) => (
          <Card {...card} key={card.id} theme={DarkTheme} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
