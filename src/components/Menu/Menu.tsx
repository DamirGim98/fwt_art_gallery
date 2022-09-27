import React, { useContext, FC } from 'react';
import cn from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../UI/Button';
import { ThemeContext } from '../../context/context';
import { IHeaderProps } from '../../types/types';

interface IMenuProps extends IHeaderProps {
  visible: boolean;
}

const Menu: FC<IMenuProps> = ({ visible, user }) => {
  const cx = cn.bind(styles);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={cx('menu', { active: visible }, { dark: theme })}>
      <div className={cx('menu__options', { dark: theme }, { active: visible })}>
        <div className={cx('menu__theme')} onClick={toggleTheme}>
          <Button variant={'themeToggle'} theme={theme} />
          <Button
            variant={'underlined'}
            children={theme ? 'light theme' : 'dark theme'}
            theme={theme}
          />
        </div>
        <div className={cx('menu__login')}>
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
        </div>
      </div>
    </div>
  );
};

export default Menu;
