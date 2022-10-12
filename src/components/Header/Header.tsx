import React, { FC, useContext, useState } from 'react';
import cn from 'classnames/bind';
import { IHeaderProps } from '../../types/types';
import styles from './Header.module.scss';
import { Button, Hamburger, Icon } from '../UI';
import { ThemeContext } from '../../context/context';
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
          <Icon type={'mainLogo'} className={cx('header_logo')} />
          <div className={cx('header__buttons')}>
            {user ? (
              <>
                <Button
                  className={cx('header__button')}
                  variant={'text-btn'}
                  children={'log out'}
                  theme={isDarkTheme}
                />
              </>
            ) : (
              <>
                <Button
                  className={cx('header__button')}
                  variant={'text-btn'}
                  children={'log in'}
                  theme={isDarkTheme}
                />
                <Button
                  className={cx('header__button')}
                  variant={'text-btn'}
                  children={'sign up'}
                  theme={isDarkTheme}
                />
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
