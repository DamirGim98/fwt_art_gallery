import React, { FC, useContext, ReactNode } from 'react';
import cn from 'classnames/bind';
import styles from './Modal.module.scss';
import { ThemeContext } from '../../../context/context';
import Icon from '../Icon';
import Portal from '../Portal';

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
    <>
      {isActive && (
        <Portal elementFindById={'react-modals'} className={'modal-portal'}>
          <div className={cx('modal', { dark: isDarkTheme })} onClick={setIsActive}>
            <div
              className={cx('modal__content', className)}
              onClick={(event) => event.stopPropagation()}
            >
              <Icon className={cx('modal__icon')} type={'close'} onClick={setIsActive} />
              {children}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
