import React, { useContext, FC } from 'react';
import cn from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../UI/Button';
import { ThemeContext } from '../../context/context';
import { IHeaderProps } from '../../types/types';
import TintedBackground from '../UI/TintedBackground';

interface IMenuProps extends IHeaderProps {
  visible: boolean;
  menuControl: () => void;
}

const Menu: FC<IMenuProps> = ({ visible, user, menuControl }) => {
  const cx = cn.bind(styles);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <TintedBackground visible={visible} onClick={menuControl} />
      <div className={cx('menu__options', { dark: isDarkTheme }, { active: visible })}>
        <div className={cx('menu__theme')} onClick={toggleTheme}>
          <Button variant={'themeToggle'} theme={isDarkTheme} />
          <Button
            variant={'underlined'}
            children={isDarkTheme ? 'light theme' : 'dark theme'}
            theme={isDarkTheme}
          />
        </div>
        <div className={cx('menu__login')}>
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
        </div>
      </div>
    </>
  );
};

export default Menu;
