import React, { FC, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './Toast.module.scss';
import { Portal } from '../UI';
import Icon from '../UI/Icon/Icon';
import { ThemeContext } from '../../context/context';

export interface IToastProps {
  error?: string;
  closeToast: () => void;
}

const Toast: FC<IToastProps> = ({ error, closeToast }) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <>
      {!!error && (
        <Portal elementFindById={cx('react-modals')} className={cx('Toast-Portal')}>
          <div className={cx('Toast', { dark: isDarkTheme })}>
            <Icon className={cx('Toast-close')} onClick={closeToast} type={'close'} />
            <p className={cx('Toast-error')}>
              <Icon type={'error'} className={cx('Toast-icon')} />
              <span>Error</span>
            </p>
            <p className={cx('Toast-message')}>{error}</p>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Toast;
