import React, { useContext } from 'react';
import cn from 'classnames/bind';
import styles from './Loader.module.scss';
import { ThemeContext } from '../../../context/context';

const Loader = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const cx = cn.bind(styles);
  return (
    <div className={cx('loader', { dark: isDarkTheme })}>
      <div className={cx('loader__container')}>
        <svg className={cx('loader__item')}>
          <circle r="24" cx="30" cy="30" strokeWidth="5" fill="none" strokeLinecap="round" />
          <circle r="24" cx="30" cy="30" strokeWidth="5" fill="none" strokeLinecap="round" />
          <circle r="24" cx="30" cy="30" strokeWidth="5" fill="none" strokeLinecap="round" />
          <circle r="24" cx="30" cy="30" strokeWidth="5" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
