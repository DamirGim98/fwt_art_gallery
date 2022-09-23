import React, { FC } from 'react';
import { ICard } from '../../types/types';
import Card from '../Card/Card';
import './gridStyle.scss';

interface CardGridProps {
  cards: ICard[];
}

const CardGrid: FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="wrapper">
      <div className="wrapper__container">
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
