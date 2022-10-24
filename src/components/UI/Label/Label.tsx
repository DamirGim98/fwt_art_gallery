import React, { DOMAttributes, FC, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './Label.module.scss';
import { ThemeContext } from '../../../context/context';
import Icon from '../Icon';

type LabelProps = {
  isActive?: boolean;
  title: string;
} & DOMAttributes<HTMLDivElement>;

const Label: FC<LabelProps> = ({ title, isActive, ...args }) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className={cx('label', { dark: isDarkTheme })} {...args}>
      <span>{title}</span>
      {isActive && <Icon type={'CloseResize'} className={cx('label__btn')} />}
    </div>
  );
};

export default Label;
