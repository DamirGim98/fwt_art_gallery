import React, { FC, useContext, useState } from 'react';
import cn from 'classnames/bind';
import styles from './Slider.module.scss';
import type { IArtistPaintings } from '../../types/types';
import { Button, Icon, Image, Modal } from '../UI';
import { ThemeContext } from '../../context/context';

export interface ISliderProps {
  paintings: IArtistPaintings[];
}

const Slider: FC<ISliderProps> = ({ paintings }) => {
  const cx = cn.bind(styles);

  const { isDarkTheme } = useContext(ThemeContext);

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== paintings.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === paintings.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(paintings.length);
    }
  };
  return (
    <div className={cx('slider', { dark: isDarkTheme })}>
      <div className={cx('slider-container')}>
        {paintings.map((value, index) => {
          return (
            <Image
              key={value._id}
              image={value.image}
              className={cx(slideIndex === index + 1 ? 'slide active-anim' : 'slide')}
            />
          );
        })}
      </div>

      <Button variant={'underlined'} className={cx('slider-imgBtn')}>
        <Icon className={cx('slider-btnIcon', 'correct', 'slider-imgIcon')} type={'imgIcon'} />
        <span>remove the cover</span>
      </Button>

      <div className={cx('slider-button')} onClick={nextSlide}>
        <Icon className={cx('slider-btnIcon', 'changeSlide')} type={'sliderArrow'} />
      </div>

      <div className={cx('slider-button', 'right')} onClick={prevSlide}>
        <Icon className={cx('slider-btnIcon', 'changeSlide', 'right')} type={'sliderArrow'} />
      </div>

      <div className={cx('slider-about')}>
        <div className={cx('slider-buttons', 'slider-insideButtons')}>
          <Icon className={cx('slider-btnIcon', 'correct')} type={'correct'} />
          <Icon className={cx('slider-btnIcon', 'correct')} type={'trashCan'} />
        </div>
        <div className={cx('slider-about-wrapper')}>
          <p className={cx('slider-text-year')}>{paintings[slideIndex - 1].yearOfCreation}</p>
          <p className={cx('slider-text-author')}>{paintings[slideIndex - 1].name}</p>
        </div>
      </div>

      <div className={cx('slider-counter')}>
        {slideIndex}/{paintings.length}
      </div>

      <div className={cx('slider-buttons')}>
        <Icon className={cx('slider-btnIcon', 'correct', 'slider-imgIcon')} type={'correct'} />
        <Icon className={cx('slider-btnIcon', 'correct', 'slider-imgIcon')} type={'trashCan'} />
      </div>
    </div>
  );
};

export default Slider;
