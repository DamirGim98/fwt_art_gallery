import { FC } from 'react';
import cn from 'classnames/bind';
import { ICard } from '../../types/types';
import { ReactComponent as Arrow } from '../../images/svg/arrow.svg';
import styles from './Card.module.scss';

interface ICardProps {
  card: ICard;
  theme?: boolean;
}

const Card: FC<ICardProps> = ({ card, theme }) => {
  const cx = cn.bind(styles);
  return (
    <div className={cx('card', { dark: theme })}>
      <img className={cx('card__img')} src={card.imgUrl} alt="card_painting" />
      <div className={cx('card__description')}>
        <div className={cx('card__description_title')}>{card.title}</div>
        <div className={cx('card__description_name')}>{card.name}</div>
        <div className={cx('card__description_year')}>{card.year}</div>
        <div className={cx('card__arrow')}>
          <Arrow fill={'#DEDEDE'} />
        </div>
      </div>
    </div>
  );
};

export default Card;
