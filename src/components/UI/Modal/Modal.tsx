import React, { FC, useContext, ReactNode } from 'react';
import cn from 'classnames/bind';
import styles from './Modal.module.scss';
import { ThemeContext } from '../../../context/context';
import Icon from '../Icon';

export interface IModalProps {
  className?: string;
  isActive?: boolean;
  setIsActive: () => void;
  children?: ReactNode;
}

const Modal: FC<IModalProps> = ({ isActive, setIsActive, className, children }) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className={cx('modal', { active: isActive }, { dark: isDarkTheme })} onClick={setIsActive}>
      <div className={cx('modal__content', className)} onClick={(event) => event.stopPropagation()}>
        <Icon className={cx('modal__icon')} type={'close'} onClick={setIsActive} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
