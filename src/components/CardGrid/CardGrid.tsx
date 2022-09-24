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
  const colorTheme = DarkTheme ? '' : 'light';
  return (
    <div className={cx('wrapper', colorTheme)}>
      <div className={cx('wrapper__container')}>
        {cards.map((card) => (
          <Card card={card} key={card.id} theme={colorTheme} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
