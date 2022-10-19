import React, { FC, useContext, useState } from 'react';
import cn from 'classnames/bind';
import styles from './Header.module.scss';
import { Button, Hamburger, Icon } from '../UI';
import { ThemeContext } from '../../context/context';
import useScrollLock from '../../hooks/useScrollLock';
import AuthModal from '../AuthModal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout, selectIsCredentials } from '../../store/Slice/AuthSlice';

export type ModalType = 'sign_up' | 'log_in';

const Header: FC = () => {
  const cx = cn.bind(styles);

  const dispatch = useAppDispatch();

  const isUser = useAppSelector((state) => selectIsCredentials(state));

  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const toggleScroll = useScrollLock();

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    toggleScroll();
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const [isModalActive, setIsModalActive] = useState(false);
  const [isModalLogin, setIsModalLogin] = useState<boolean>(true);

  const toggleModal = (type: ModalType) => {
    if (type === 'sign_up') {
      setIsModalLogin(false);
    }
    if (type === 'log_in') {
      setIsModalLogin(true);
    }
    setIsModalActive(!isModalActive);
    toggleScroll();
  };

  return (
    <>
      <header>
        {isModalActive && (
          <AuthModal
            toggleActive={() => setIsModalActive(!isModalActive)}
            isActive={isModalActive}
            isModalLogin={isModalLogin}
          />
        )}
        <div
          className={cx('header-bg', { active: isMenuActive }, { dark: isDarkTheme })}
          onClick={toggleMenu}
        />
        <div className={cx('header', { dark: isDarkTheme })}>
          <Icon type={'mainLogo'} className={cx('header_logo')} />
          <div className={cx('header__buttons', { active: isMenuActive }, { dark: isDarkTheme })}>
            {isUser ? (
              <>
                <Button
                  className={cx('header_login')}
                  variant={'text-btn'}
                  children={'log out'}
                  theme={isDarkTheme}
                  onClick={() => handleLogout()}
                />
              </>
            ) : (
              <>
                <Button
                  className={cx('header_login')}
                  variant={'text-btn'}
                  children={'log in'}
                  theme={isDarkTheme}
                  onClick={() => toggleModal('log_in')}
                />
                <Button
                  className={cx('header_signup')}
                  variant={'text-btn'}
                  children={'sign up'}
                  theme={isDarkTheme}
                  onClick={() => toggleModal('sign_up')}
                />
              </>
            )}
            <Button
              className={cx('header_themeBtn')}
              variant={'underlined'}
              onClick={toggleTheme}
              theme={isDarkTheme}
            >
              <Icon
                className={cx('header_themeIcon', { dark: isDarkTheme })}
                type={isDarkTheme ? 'themeToggleDark' : 'themeToggleLight'}
              />
              {isMenuActive && <>{isDarkTheme ? 'light theme' : 'dark theme'}</>}
            </Button>
          </div>
          <Hamburger
            className={cx('header-hamburger')}
            isActive={isMenuActive}
            onClick={toggleMenu}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
