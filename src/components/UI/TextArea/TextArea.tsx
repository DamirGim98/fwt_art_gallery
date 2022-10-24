import React, { FC, TextareaHTMLAttributes, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './TextArea.module.scss';
import { ThemeContext } from '../../../context/context';
import Icon from '../Icon/Icon';

export interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  error?: string | null;
  label?: string;
}

const TextArea: FC<ITextAreaProps> = ({ className, name, error, label, ...args }) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className={cx('container', { dark: isDarkTheme })}>
      <label className={cx('label')} htmlFor={name}>
        {label}
      </label>
      <textarea
        className={cx('textarea', { dark: isDarkTheme }, className, {
          textarea__error: error,
        })}
        name={name}
        {...args}
      />
      {error && (
        <div className={cx('error')}>
          <Icon type={'error'} className={cx('icon')} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default TextArea;
