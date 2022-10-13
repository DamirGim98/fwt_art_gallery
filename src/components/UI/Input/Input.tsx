import React, { FC, InputHTMLAttributes, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './Input.module.scss';
import { ThemeContext } from '../../../context/context';
import Icon from '../Icon/Icon';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  type?: string;
  error?: string | null;
  label?: string;
  isRequired?: boolean;
}

export const Input: FC<IInputProps> = ({
  className,
  name,
  type,
  error,
  isRequired,
  label,
  ...args
}) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className={cx('input', { dark: isDarkTheme })}>
      <label className={cx('input-label')} htmlFor={name}>
        {label}
        {isRequired && <span className={cx('input-labelRequired')}>*</span>}
      </label>
      <input
        className={cx('input-input', className, {
          input__error: error,
        })}
        name={name}
        type={type}
        {...args}
      />
      {error && (
        <div className={cx('input-ErrorMessage')}>
          <Icon type={'error'} className={cx('input-icon')} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
