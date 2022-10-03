import React, { ReactNode } from 'react';
import cn from 'classnames/bind';
import styles from './Grid.module.scss';

const CardGrid = ({ children }: { children?: ReactNode }) => {
  const cx = cn.bind(styles);
  return (
    <div className={cx('grid')}>
      <div className={cx('grid__container')}>{children}</div>
    </div>
  );
};

export default CardGrid;
