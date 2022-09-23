import { FC } from 'react';
import { ICard } from '../../types/types';
import { ReactComponent as Arrow } from '../../images/svg/arrow.svg';
import './cardStyle.scss';

interface CardProps {
  card: ICard;
}

const Card: FC<CardProps> = ({ card }) => {
  return (
    <div className="card">
      <img className="card__img" src={card.imgUrl} alt="card_painting" />
      <div className="card__description">
        <div className="card__description_title">{card.title}</div>
        <div className="card__description_name">{card.name}</div>
        <div className="card__description_year">{card.year}</div>
        <div className="card__arrow">
          <Arrow fill={'#DEDEDE'} />
        </div>
      </div>
    </div>
  );
};

export default Card;
