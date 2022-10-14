import React, { FC, useState, useRef } from 'react';
import cn from 'classnames/bind';
import { IImage } from '../../../types/types';
import { BASE_URL } from '../../../Api/instance';
import useLazyLoading from '../../../hooks/useLazyLoading';
import styles from './Image.module.scss';
import Loader from '../Loader';

export interface IImageProps {
  image: IImage;
  className?: string;
}

const Image: FC<IImageProps> = ({ image, className }) => {
  const cx = cn.bind(styles);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  useLazyLoading(containerRef, toggleVisible);

  return (
    <div ref={containerRef} className={cx('container', className)}>
      <picture key={image._id}>
        <source
          type="image/webp"
          srcSet={`${BASE_URL}${image.webp}`}
          media={'(max-width: 576px)'}
        />
        <source
          type="image/webp"
          srcSet={`${BASE_URL}${image.webp2x}`}
          media={'(min-width: 576px)'}
        />
        <source type="image/jpg" srcSet={`${BASE_URL}${image.src}`} media={'(max-width: 576px)'} />
        <source
          type="image/jpg"
          srcSet={`${BASE_URL}${image.src2x}`}
          media={'(min-width: 576px)'}
        />
        {isVisible && (
          <img
            onLoad={() => setIsLoaded(!isLoaded)}
            ref={imageRef}
            className={cx('image')}
            src={`${BASE_URL}${image.src}`}
            alt={'picture'}
          />
        )}
      </picture>
      {!isLoaded && <Loader isInside={true} />}
    </div>
  );
};

export default Image;
