import React, { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames/bind';
import styles from './ArtistAbout.module.scss';
import { EntityId, selectArtistById } from '../../store/Slice/ArtistSlice';
import { useAppSelector } from '../../store/hooks';
import { Button, Label, Accordion, Icon } from '../UI';
import { ThemeContext } from '../../context/context';
import { BASE_URL } from '../../Api/API';

interface ArtistAboutProps {
  id: EntityId;
}

const ArtistAbout: FC<ArtistAboutProps> = ({ id }) => {
  const navigate = useNavigate();
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  const artist = useAppSelector((state) => selectArtistById(state, id));
  const UrlImg = BASE_URL.concat(artist?.mainPainting.image.src || '');

  return (
    <div className={cx('artist', { dark: isDarkTheme })}>
      <div className={cx('artist__menu')}>
        <Button
          className={cx('artist-nav')}
          variant={'underlined'}
          theme={isDarkTheme}
          onClick={() => navigate(-1)}
        >
          <span>back</span>
          <Icon type={'longArrLeft'} />
        </Button>
      </div>
      <div className={cx('artist__info')}>
        <div className={cx('artist-imgWrapper')}>
          <img className={cx('artist__img')} src={UrlImg} alt="artist_main" />
          <div className={cx('artist_grid', 'artist_gridInImg')}>
            <p className={cx('artist__years')}>{artist?.yearsOfLife}</p>
            <p className={cx('artist__location')}>{artist?.mainPainting.name}</p>
            <h2 className={cx('artist__name')}>{artist?.name}</h2>
          </div>
        </div>
        <div className={cx('artist__description', { dark: isDarkTheme })}>
          <div className={cx('artist_grid')}>
            <p className={cx('artist__years')}>{artist?.yearsOfLife}</p>
            <p className={cx('artist__location')}>{artist?.mainPainting.name}</p>
            <h2 className={cx('artist__name')}>{artist?.name}</h2>
          </div>
          <div className={cx('artist_divider')}></div>
          <Accordion content={artist?.description || ''} />
          <div className={cx('artist__labelContainer')}>
            {artist?.genres.map((genreID) => (
              <Label key={genreID} id={genreID} isActive={false} />
            ))}
          </div>
        </div>
      </div>
      <h2 className={cx('artist__artworks')}>Artworks</h2>
    </div>
  );
};

export default ArtistAbout;
