import React, { DOMAttributes, FC, ReactNode } from 'react';
import cn from 'classnames/bind';
import styles from './Button.module.scss';
import Icon from '../Icon';

interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  /**
   * Choose one of the available variants to work with, note text maybe not available
   * for some of them.
   */
  variant?: 'outlined' | 'underlined' | 'delete' | 'themeToggle' | 'scrollUp' | 'text-btn';
  /**
   * Allows additional styling.
   */
  className?: string;
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
   * Child properties if you want to use Elements inside.
   */
  children?: ReactNode;
}

const Button: FC<IButtonProps> = ({
  className,
  variant,
  theme,
  isDisabled = false,
  children,
  typeButton = 'button',
  ...args
}) => {
  const cx = cn.bind(styles);
  const optionsWithText = ['underlined', 'outlined', 'text-btn'];
  return (
    <button
      className={cx(
        'button',
        className,
        {
          dark: theme,
        },
        variant,
      )}
      disabled={isDisabled}
      type={typeButton}
      {...args}
    >
      {variant === 'delete' && <Icon type={'trashCan'} />}
      {variant === 'themeToggle' && <Icon type={theme ? 'themeToggleDark' : 'themeToggleLight'} />}
      {variant === 'scrollUp' && <Icon type={'arrowUp'} />}
      {optionsWithText.includes(variant || '') && <span>{children}</span>}
    </button>
  );
};

export default Button;
