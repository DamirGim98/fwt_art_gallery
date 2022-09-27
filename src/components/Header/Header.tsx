import React, { FC, useContext, useState } from 'react';
import cn from 'classnames/bind';
import { IHeaderProps } from '../../types/types';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import Button from '../UI/Button';
import { ThemeContext } from '../../context/context';
import Hamburger from '../UI/Hamburger';
import Menu from '../Menu';

const Header: FC<IHeaderProps> = ({ user }) => {
  const cx = cn.bind(styles);
  const [menu, setMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <header>
        <Menu visible={menu} user={user} />
        <div className={cx('header', { dark: theme })}>
          <Logo />
          <div className={cx('header__buttons')}>
            {user ? (
              <>
                <Button variant={'text-btn'} children={'log out'} theme={theme} />
              </>
            ) : (
              <>
                <Button variant={'text-btn'} children={'log in'} theme={theme} />
                <Button variant={'text-btn'} children={'sign up'} theme={theme} />
              </>
            )}
            <Button variant={'themeToggle'} theme={theme} onClick={toggleTheme} />
            <Hamburger onClick={toggleMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
