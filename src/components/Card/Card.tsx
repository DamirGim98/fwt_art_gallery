import { FC } from 'react';
import cn from 'classnames/bind';
import { ICard } from '../../types/types';
import { ReactComponent as Arrow } from '../../images/svg/arrow.svg';
import styles from './Card.module.scss';

interface ICardProps extends ICard {
  theme?: boolean;
}

const Card: FC<ICardProps> = ({ imgUrl, title, name, year, theme }) => {
  const cx = cn.bind(styles);
  return (
    <div className={cx('card', { dark: theme })}>
      <img className={cx('card__img')} src={imgUrl} alt="card_painting" />
      <div className={cx('card__description')}>
        <div className={cx('card__description_title')}>{title}</div>
        <div className={cx('card__description_name')}>{name}</div>
        <div className={cx('card__description_year')}>{year}</div>
        <div className={cx('card__arrow')}>
          <Arrow fill={'#DEDEDE'} />
        </div>
      </div>
    </div>
  );
};

export default Card;
