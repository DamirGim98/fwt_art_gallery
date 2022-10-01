import React, { FC, useContext, useState } from 'react';
import cn from 'classnames/bind';
import { IHeaderProps } from '../../types/types';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import Button from '../UI/Button';
import { ThemeContext } from '../../context/context';
import Hamburger from '../UI/Hamburger';
import Menu from '../Menu';
import TintedBackground from '../UI/TintedBackground';

const Header: FC<IHeaderProps> = ({ user }) => {
  const cx = cn.bind(styles);
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <header>
        <TintedBackground visible={isMenuActive} />
        <Menu visible={isMenuActive} user={user} />
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
            <Hamburger onClick={toggleMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
