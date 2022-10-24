import React, { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames/bind';
import styles from './ArtistAbout.module.scss';
import { Button, Label, Accordion, Icon, Image } from '../UI';
import { ThemeContext } from '../../context/context';
import { IArtist } from '../../types/types';
import { useAppSelector } from '../../store/hooks';
import { selectAllGenres } from '../../store/Slice/GenresSlice';

interface ArtistAboutProps {
  artist: IArtist;
}

const ArtistAbout: FC<ArtistAboutProps> = ({ artist }) => {
  const navigate = useNavigate();
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);

  const artistGenres = useAppSelector(selectAllGenres).filter((gen) =>
    artist.genres.includes(gen._id),
  );

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
          {artist.mainPainting.image.src ? (
            <Image className={cx('artist__img')} image={artist.mainPainting.image} />
          ) : (
            <div className={cx('artist_NoImg')}>
              <Icon className={cx('artist_NoImg_Icon')} type={'PhotoPlug'} />
              <span>No image uploaded</span>
            </div>
          )}
          <div className={cx('artist_grid', 'artist_gridInImg')}>
            <p className={cx('artist__years')}>{artist.yearsOfLife}</p>
            <p className={cx('artist__location')}>{artist.mainPainting.name}</p>
            <h2 className={cx('artist__name')}>{artist.name}</h2>
          </div>
        </div>
        <div className={cx('artist__description', { dark: isDarkTheme })}>
          <div className={cx('artist_grid')}>
            <p className={cx('artist__years')}>{artist.yearsOfLife}</p>
            <p className={cx('artist__location')}>{artist.mainPainting.name}</p>
            <h2 className={cx('artist__name')}>{artist.name}</h2>
          </div>
          <div className={cx('artist_divider')}></div>
          <Accordion content={artist?.description || ''} />
          <div className={cx('artist__labelContainer')}>
            {artistGenres.map((genre) => (
              <Label title={genre.name} />
            ))}
          </div>
        </div>
      </div>
      <h2 className={cx('artist__artworks')}>Artworks</h2>
    </div>
  );
};

export default ArtistAbout;
