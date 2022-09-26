import React, { FC, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import Button from '../UI/Button';
import { ThemeContext } from '../../context/context';
import Hamburger from '../UI/Hamburger';

export interface IUser {
  name: string;
}

export interface IHeaderProps {
  user?: IUser;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

const Header: FC<IHeaderProps> = ({ user }) => {
  const cx = cn.bind(styles);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <header>
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
            <Hamburger />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
