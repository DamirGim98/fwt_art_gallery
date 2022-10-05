import React, { FC, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './Label.module.scss';
import { ThemeContext } from '../../../context/context';

type LabelProps = {
  text: string;
  isActive: boolean;
};

const Label: FC<LabelProps> = ({ text, isActive }) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={cx('label', { dark: isDarkTheme })}>
      <span>{text}</span>
      {isActive && <button className={cx('label__btn')} type="button"></button>}
    </div>
  );
};

export default Label;
