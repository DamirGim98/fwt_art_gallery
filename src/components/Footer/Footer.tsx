import React, { FC, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './Footer.module.scss';
import { ThemeContext } from '../../context/context';
import { Link, Icon } from '../UI';

const Footer: FC = () => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <footer>
      <hr />
      <div className={cx('footer', { dark: isDarkTheme })}>
        <div className={cx('footer__info')}>
          <span>
            Проект реализован в рамках стажировки
            <br /> для Frontend-разработчиков от компании<span> </span>
            <Link children={'Framework team'} link={'https://framework.team/'} />
          </span>
          <span>Гиматдинов Дамир, 2021</span>
        </div>
        <div className={cx('footer__socials')}>
          <Link>
            <Icon type={'instagram'} />
          </Link>
          <Link>
            <Icon type={'vk'} />
          </Link>
          <Link>
            <Icon type={'facebook'} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
