import { FC, useContext } from 'react';
import cn from 'classnames/bind';
import { ICard } from '../../types/types';
import { Icon, Image } from '../UI';
import styles from './Card.module.scss';
import { ThemeContext } from '../../context/context';

const Card: FC<ICard> = ({ title, name, year, img }) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  const regex = /\d{4}/g;
  const yearOfLife = year.match(regex)?.join(' - ');

  return (
    <div className={cx('card', { dark: isDarkTheme })}>
      <Image className={cx('card__img')} image={img} />
      <div className={cx('card__description')}>
        <div className={cx('card__description_title')}>{title}</div>
        <div className={cx('card__description_name')}>{name}</div>
        <div className={cx('card__description_year')}>{yearOfLife}</div>
        <div className={cx('card__arrow')}>
          <Icon type={'longArrLeft'} className={cx('card-arrow')} />
        </div>
      </div>
    </div>
  );
};

export default Card;
