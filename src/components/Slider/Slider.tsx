import React, { FC, useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import cn from 'classnames/bind';
import styles from './Slider.module.scss';
import type { IArtistPaintings } from '../../types/types';
import { Button, Icon, Image, Portal } from '../UI';
import { ThemeContext } from '../../context/context';

export interface ISliderProps {
  paintings: IArtistPaintings[];
  initialSlideIndex: number;
  isSliderVisible: boolean;
  closeSlider: () => void;
}

const Slider: FC<ISliderProps> = ({
  paintings,
  initialSlideIndex,
  isSliderVisible,
  closeSlider,
}) => {
  const cx = cn.bind(styles);

  const NextEl = useRef<HTMLDivElement>(null);
  const PrevEl = useRef<HTMLDivElement>(null);

  const { isDarkTheme } = useContext(ThemeContext);

  const [slideIndex, setSlideIndex] = useState(initialSlideIndex);

  const handleSlideChange = (s: SwiperCore) => {
    setSlideIndex(s.realIndex);
  };

  return (
    <>
      {isSliderVisible && (
        <Portal elementFindById={'react-modals'} className={cx('Portal-slider')}>
          <Icon className={cx('Portal-slider-close')} type={'close'} onClick={closeSlider} />
          <Swiper
            modules={[Navigation]}
            className={cx('slider', { dark: isDarkTheme })}
            initialSlide={slideIndex}
            onSlideChange={handleSlideChange}
            speed={600}
            onInit={(swiper) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.prevEl = PrevEl.current;
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.nextEl = NextEl.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            navigation={{ prevEl: PrevEl.current, nextEl: NextEl.current }}
            loop
          >
            {paintings.map((value) => {
              return (
                <SwiperSlide className={'slider-slide'} key={value._id}>
                  <Image image={value.image} />
                </SwiperSlide>
              );
            })}

            <Button variant={'underlined'} className={cx('slider-imgBtn')}>
              <Icon className={cx('slider-btnIcon', 'IconBg', 'slider-imgIcon')} type={'imgIcon'} />
              <span>remove the cover</span>
            </Button>

            <div className={cx('slider-button')} ref={PrevEl}>
              <Icon className={cx('slider-btnIcon')} type={'sliderArrow'} />
            </div>

            <div className={cx('slider-button', 'right')} ref={NextEl}>
              <Icon className={cx('slider-btnIcon', 'right')} type={'sliderArrow'} />
            </div>

            <div className={cx('slider-about')}>
              <div className={cx('slider-buttons', 'slider-insideButtons')}>
                <Icon className={cx('slider-btnIcon', 'IconBg')} type={'correct'} />
                <Icon className={cx('slider-btnIcon', 'IconBg')} type={'trashCan'} />
              </div>
              <div className={cx('slider-about-wrapper')}>
                <p className={cx('slider-text-year')}>{paintings[slideIndex].yearOfCreation}</p>
                <p className={cx('slider-text-author')}>{paintings[slideIndex].name}</p>
              </div>
            </div>

            <div className={cx('slider-counter')}>
              {slideIndex + 1}/{paintings.length}
            </div>

            <div className={cx('slider-buttons')}>
              <Icon className={cx('slider-btnIcon', 'IconBg', 'slider-imgIcon')} type={'correct'} />
              <Icon
                className={cx('slider-btnIcon', 'IconBg', 'slider-imgIcon')}
                type={'trashCan'}
              />
            </div>
          </Swiper>
        </Portal>
      )}
    </>
  );
};

export default Slider;
