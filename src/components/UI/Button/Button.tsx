import React, { DOMAttributes, FC, ReactNode } from 'react';
import cn from 'classnames/bind';
import styles from './Button.module.scss';
import { ReactComponent as Plus } from './assets/plus.svg';
import { ReactComponent as TrashCan } from './assets/trashCan.svg';
import { ReactComponent as ThemeLight } from './assets/themeIconLight.svg';
import { ReactComponent as ThemeDark } from './assets/themeIcon.svg';
import { ReactComponent as ArrowUp } from './assets/arrowUp.svg';

interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  /**
   * Choose one of the available variants to work with, note text maybe not available
   * for some of them.
   */
  variant?: 'outlined' | 'underlined' | 'delete' | 'themeToggle' | 'scrollUp';
  /**
   * Allows dark and light theme, dark theme is considered true value.
   */
  theme?: boolean;
  /**
   * Disabled property for the button both action and styling.
   */
  isDisabled?: boolean;
  /**
   * Basic HTML type for the button.
   */
  typeButton?: 'button' | 'submit';
  /**
   * Mouse event from React.
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * Child properties if you want to use Elements inside.
   */
  children?: ReactNode;
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
      {['underlined', 'outlined'].includes(variant || '') && <span>{children}</span>}
    </button>
  );
};

export default Button;
