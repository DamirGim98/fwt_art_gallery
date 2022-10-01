import React, { FC, useContext, useState } from 'react';
import cn from 'classnames/bind';
import { IHeaderProps } from '../../types/types';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import Button from '../UI/Button';
import { ThemeContext } from '../../context/context';
import Hamburger from '../UI/Hamburger';
import Menu from '../Menu';
import useScrollLock from '../../hooks/useScrollLock';

const Header: FC<IHeaderProps> = ({ user }) => {
  const cx = cn.bind(styles);

  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const toggleScroll = useScrollLock();

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    toggleScroll();
  };

  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <header>
        <Menu visible={isMenuActive} user={user} menuControl={toggleMenu} />
        <div className={cx('header', { dark: isDarkTheme })}>
          <Logo />
          <div className={cx('header__buttons')}>
            {user ? (
              <>
                <Button variant={'text-btn'} children={'log out'} theme={isDarkTheme} />
              </>
            ) : (
              <>
                <Button variant={'text-btn'} children={'log in'} theme={isDarkTheme} />
                <Button variant={'text-btn'} children={'sign up'} theme={isDarkTheme} />
              </>
            )}
            <Button variant={'themeToggle'} theme={isDarkTheme} onClick={toggleTheme} />
            <Hamburger isActive={isMenuActive} onClick={toggleMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
