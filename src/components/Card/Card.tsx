import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames/bind';
import { ICard } from '../../types/types';
import { Icon, Image } from '../UI';
import styles from './Card.module.scss';
import { ThemeContext } from '../../context/context';
import { useAppSelector } from '../../store/hooks';
import { selectArtistMainImage } from '../../store/Slice/ArtistSlice';

const Card: FC<ICard> = ({ title, name, year, id }) => {
  const artist = useAppSelector((state) => selectArtistMainImage(state, id));
  const cx = cn.bind(styles);
  const navigate = useNavigate();
  const { isDarkTheme } = useContext(ThemeContext);
  const regex = /\d{4}/g;
  const yearOfLife = year.match(regex)?.join(' - ');

  if (artist)
    return (
      <div className={cx('card', { dark: isDarkTheme })} onClick={() => navigate(`/artist/${id}`)}>
        <Image className={cx('card__img')} image={artist.mainPainting.image} />
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
  return <></>;
};

export default Card;
