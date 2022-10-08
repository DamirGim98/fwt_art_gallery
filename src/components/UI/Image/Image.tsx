import React, { FC, useEffect, useState, useRef } from 'react';
import cn from 'classnames/bind';
import { IImage } from '../../../types/types';
import { BASE_URL } from '../../../Api/API';
import useLazyLoading from '../../../hooks/useLazyLoading';
import styles from './Image.module.scss';

export interface IImageProps {
  image: IImage;
  className?: string;
}

const Image: FC<IImageProps> = ({ image, className }) => {
  const cx = cn.bind(styles);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const isVisible = useLazyLoading(containerRef);

  useEffect(() => {
    if (!isVisible || isLoaded) {
      return;
    }
    if (imageRef.current) {
      imageRef.current.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [isVisible, isLoaded]);

  return (
    <picture ref={containerRef} className={cx('container')} key={image._id}>
      <source type="image/webp" srcSet={`${BASE_URL}${image.webp}`} media={'(max-width: 576px)'} />
      <source
        type="image/webp"
        srcSet={`${BASE_URL}${image.webp2x}`}
        media={'(min-width: 576px)'}
      />
      <source type="image/jpg" srcSet={`${BASE_URL}${image.src}`} media={'(max-width: 576px)'} />
      <source type="image/jpg" srcSet={`${BASE_URL}${image.src2x}`} media={'(min-width: 576px)'} />
      {(isVisible || isLoaded) && (
        <img ref={imageRef} className={className} src={`${BASE_URL}${image.src}`} alt={'picture'} />
      )}
    </picture>
  );
};

export default Image;
