import React, { FC, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './styles.module.scss';
import { ThemeContext } from '../../../context/context';

export interface ITintedBgProps {
  visible: boolean;
}

const TintedBackground: FC<ITintedBgProps> = ({ visible }) => {
  const cx = cn.bind(styles);
  const theme = useContext(ThemeContext);
  return <div className={cx('bg', { active: visible }, { dark: theme })} />;
};

export default TintedBackground;
