import React, { DOMAttributes, FC, memo, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './Icon.styles.scss';
import { IconType, iconTypes } from './IconType';
import { ThemeContext } from '../../../context/context';

export interface IIconProps extends DOMAttributes<HTMLDivElement> {
  className?: string;
  type: IconType;
  onClick?: () => void | Promise<void>;
}

const getIcon = (type: IconType): JSX.Element => iconTypes.get(type) as JSX.Element;

const Icon: FC<IIconProps> = ({ className, type, onClick, ...args }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const cx = cn.bind(styles);
  return (
    <div className={cx('Icon', className, { dark: isDarkTheme })} onClick={onClick} {...args}>
      {getIcon(type)}
    </div>
  );
};

export default memo(Icon);
