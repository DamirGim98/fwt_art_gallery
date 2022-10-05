import React, { FC, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './Label.module.scss';
import { ThemeContext } from '../../../context/context';
import { useAppSelector } from '../../../store/hooks';
import { selectGenreById } from '../../../store/Slice/GenresSlice';

type LabelProps = {
  id: string | number;
  isActive: boolean;
};

const Label: FC<LabelProps> = ({ id, isActive }) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  const genreObj = useAppSelector((state) => selectGenreById(state, id));
  return (
    <div className={cx('label', { dark: isDarkTheme })}>
      <span>{genreObj?.name}</span>
      {isActive && <button className={cx('label__btn')} type="button"></button>}
    </div>
  );
};

export default Label;
