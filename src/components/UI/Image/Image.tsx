import React, { FC } from 'react';
import { IImage } from '../../../types/types';
import { BASE_URL } from '../../../Api/API';

export interface IImageProps {
  image: IImage;
  className?: string;
}

const Image: FC<IImageProps> = ({ image, className }) => {
  return (
    <picture key={image._id}>
      <source type="image/webp" srcSet={`${BASE_URL}${image.webp}`} media={'(max-width: 576px)'} />
      <source
        type="image/webp"
        srcSet={`${BASE_URL}${image.webp2x}`}
        media={'(min-width: 576px)'}
      />
      <source type="image/jpg" srcSet={`${BASE_URL}${image.src}`} media={'(max-width: 576px)'} />
      <source type="image/jpg" srcSet={`${BASE_URL}${image.src2x}`} media={'(min-width: 576px)'} />
      <img className={className} src={`${BASE_URL}${image.src}`} alt={'picture'} />
    </picture>
  );
};

export default Image;
