import React, { DOMAttributes, FC } from 'react';
import cn from 'classnames/bind';
import styles from './Hamburger.module.scss';

interface IHamburgerProps extends DOMAttributes<HTMLDivElement> {
  isActive: boolean;
  className?: string;
}

const Hamburger: FC<IHamburgerProps> = ({ isActive, className, ...args }) => {
  const cx = cn.bind(styles);
  return (
    <div className={cx('hamburger', className, { active: isActive })} {...args}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
