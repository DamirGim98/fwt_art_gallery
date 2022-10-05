import React, { FC, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './ArtistAbout.module.scss';
import { EntityId, selectArtistById } from '../../store/ArtistSlice';
import { useAppSelector } from '../../store/hooks';
import Button from '../UI/Button';
import { ReactComponent as LeftArrow } from '../../images/svg/ThinArrowLeft.svg';
import { ReactComponent as DownArrow } from '../../images/svg/DropdownArrow.svg';
import { ThemeContext } from '../../context/context';
import Label from '../UI/Label';

interface ArtistAboutProps {
  id: EntityId;
}

const ArtistAbout: FC<ArtistAboutProps> = ({ id }) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  const artist = useAppSelector((state) => selectArtistById(state, id));
  const UrlImg = 'https://internship-front.framework.team'.concat(
    artist?.mainPainting.image.src || '',
  );
  return (
    <div className={cx('artist', { dark: isDarkTheme })}>
      <div className={cx('artist__menu')}>
        <Button variant={'underlined'} svgPos={'left'} theme={isDarkTheme}>
          back
          <LeftArrow />
        </Button>
      </div>
      <div className={cx('artist__info')}>
        <img className={cx('artist__img')} src={UrlImg} alt="artist_main" />
        <div className={cx('artist__description', { dark: isDarkTheme })}>
          <div className={cx('artist_grid')}>
            <p className={cx('artist__years')}>{artist?.yearsOfLife}</p>
            <p className={cx('artist__location')}>{artist?.yearsOfLife}</p>
            <h2 className={cx('artist__name')}>{artist?.name}</h2>
          </div>
          <div className={cx('artist_divider')}></div>
          <div className={cx('artist__about')}>{artist?.description}</div>
          <Button variant={'underlined'} svgPos={'right'} theme={isDarkTheme}>
            Read more
            <DownArrow />
          </Button>
          <div className={cx('artist__labelContainer')}>
            <Label text={'Impression'} isActive={false} />
            <Label text={'Another Style'} isActive={false} />
            <Label text={'Russian Culture'} isActive={false} />
            <Label text={'Art'} isActive={false} />
            <Label text={'Ass'} isActive={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistAbout;
