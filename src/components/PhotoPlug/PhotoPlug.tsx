import React, { FC, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './PhotoPlug.module.scss';
import { Icon } from '../UI';
import { ThemeContext } from '../../context/context';

export interface IPhotoPlugProps {
  onClick?: () => void;
}

const PhotoPlug: FC<IPhotoPlugProps> = ({ onClick }) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className={cx('plug', { dark: isDarkTheme })} onClick={onClick}>
      <Icon className={cx('plug-icon')} type={'PhotoPlug'} />
      <Icon className={cx('plug-plus')} type={'close'} />
    </div>
  );
};

export default PhotoPlug;
