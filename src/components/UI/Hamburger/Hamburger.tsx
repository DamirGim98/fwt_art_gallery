import React, { FC, useState } from 'react';
import cn from 'classnames/bind';
import styles from './Hamburger.module.scss';
import useScrollLock from '../../../hooks/useScrollLock';

interface IHamburgerProps {
  onClick?: () => void;
}

const Hamburger: FC<IHamburgerProps> = ({ onClick }) => {
  const cx = cn.bind(styles);
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggleScroll = useScrollLock();
  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) onClick();
    toggleScroll();
  };
  return (
    <div className={cx('hamburger', { active: isActive })} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
