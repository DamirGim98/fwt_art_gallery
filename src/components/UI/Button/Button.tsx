import React, { DOMAttributes, FC, ReactNode } from 'react';
import cn from 'classnames/bind';
import styles from './Button.module.scss';
import { ReactComponent as TrashCan } from './assets/trashCan.svg';
import { ReactComponent as ThemeLight } from './assets/themeIconLight.svg';
import { ReactComponent as ThemeDark } from './assets/themeIcon.svg';
import { ReactComponent as ArrowUp } from './assets/arrowUp.svg';

interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  /**
   * Choose one of the available variants to work with, note text maybe not available
   * for some of them.
   */
  variant?: 'outlined' | 'underlined' | 'delete' | 'themeToggle' | 'scrollUp' | 'text-btn';
  /**
   * Allows dark and light theme, dark theme is considered true value.
   */
  theme?: boolean;
  /**
   * If passing SVGs as props define their position
   */
  svgPos?: 'left' | 'right';
  /**
   * Disabled property for the button both action and styling.
   */
  isDisabled?: boolean;
  /**
   * Basic HTML type for the button.
   */
  typeButton?: 'button' | 'submit';
  /**
   * Child properties if you want to use Elements inside.
   */
  children?: ReactNode;
}

const Button: FC<IButtonProps> = ({
  variant,
  theme,
  svgPos = 'left',
  isDisabled = false,
  children,
  typeButton = 'button',
  onClick,
  ...args
}) => {
  const cx = cn.bind(styles);
  const optionsWithText = ['underlined', 'outlined', 'text-btn'];
  return (
    <button
      className={cx(
        'button',
        variant,
        {
          dark: theme,
        },
        `svg-pos-${svgPos}`,
      )}
      disabled={isDisabled}
      type={typeButton}
      {...args}
    >
      {variant === 'delete' && <TrashCan />}
      {variant === 'themeToggle' && (theme ? <ThemeDark /> : <ThemeLight />)}
      {variant === 'scrollUp' && <ArrowUp />}
      {optionsWithText.includes(variant || '') && <span>{children}</span>}
    </button>
  );
};

export default Button;
