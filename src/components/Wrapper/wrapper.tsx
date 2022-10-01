import React, { ReactNode, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './wrapper.module.scss';
import { ThemeContext } from '../../context/context';

const Wrapper = ({ children }: { children: ReactNode }) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className={cx('wrapper', { dark: isDarkTheme })}>
      <div className={cx('container')}>{children}</div>
    </div>
  );
};

export default Wrapper;
