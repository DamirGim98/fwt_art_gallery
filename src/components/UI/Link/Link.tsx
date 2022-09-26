import React, { DOMAttributes, FC, ReactNode, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './Link.module.scss';
import { ThemeContext } from '../../../context/context';

interface ILinkProps extends DOMAttributes<HTMLAnchorElement> {
  /**
   * Allows to pass URL for certain website.
   */
  link?: string;
  /**
   * Allows dark and light theme, dark theme is considered true value.
   */
  theme?: boolean;
  /**
   * Child properties if you want to use Elements inside.
   */
  children?: ReactNode;
}

const Link: FC<ILinkProps> = ({ link = '#', children, ...other }) => {
  const cx = cn.bind(styles);
  const { theme } = useContext(ThemeContext);
  return (
    <a href={link} className={cx('link', { dark: theme }, { ...other })}>
      <span>{children}</span>
    </a>
  );
};

export default Link;
