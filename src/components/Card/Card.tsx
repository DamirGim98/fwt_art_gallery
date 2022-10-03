import { FC, useContext } from 'react';
import cn from 'classnames/bind';
import { ICard } from '../../types/types';
import { ReactComponent as Arrow } from '../../images/svg/arrow.svg';
import styles from './Card.module.scss';
import { ThemeContext } from '../../context/context';

const Card: FC<ICard> = ({ imgUrl, title, name, year }) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  const UrlImg = 'https://internship-front.framework.team'.concat(imgUrl);
  const regex = /\d{4}/g;
  const yearOfLife = year.match(regex)?.join(' - ');

  return (
    <div className={cx('card', { dark: isDarkTheme })}>
      <img className={cx('card__img')} src={UrlImg} alt="card_painting" />
      <div className={cx('card__description')}>
        <div className={cx('card__description_title')}>{title}</div>
        <div className={cx('card__description_name')}>{name}</div>
        <div className={cx('card__description_year')}>{yearOfLife}</div>
        <div className={cx('card__arrow')}>
          <Arrow fill={'#DEDEDE'} />
        </div>
      </div>
    </div>
  );
};

export default Card;
