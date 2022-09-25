import React, { DOMAttributes, FC } from 'react';
import cn from 'classnames/bind';
import styles from './Button.module.scss';
import { ReactComponent as Plus } from './assets/plus.svg';
import { ReactComponent as TrashCan } from './assets/trashCan.svg';
import { ReactComponent as ThemeLight } from './assets/themeIconLight.svg';
import { ReactComponent as ThemeDark } from './assets/themeIcon.svg';
import { ReactComponent as ArrowUp } from './assets/arrowUp.svg';

interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'underlined' | 'delete' | 'themeToggle' | 'scrollUp';
  theme?: boolean;
  isDisabled?: boolean;
  typeButton?: 'button' | 'submit';
  onClick?: (event: React.MouseEvent) => void;
}

const Button: FC<IButtonProps> = ({
  variant,
  theme,
  isDisabled,
  children,
  typeButton,
  onClick,
  ...other
}) => {
  const cx = cn.bind(styles);
  return (
    <button
      className={cx('button', variant, {
        button__disabled: isDisabled,
        dark: theme,
      })}
      disabled={isDisabled}
      type={typeButton}
      onClick={onClick}
      {...other}
    >
      {variant === 'underlined' && <Plus />}
      {variant === 'delete' && <TrashCan />}
      {variant === 'themeToggle' && (theme ? <ThemeDark /> : <ThemeLight />)}
      {variant === 'scrollUp' && <ArrowUp />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
