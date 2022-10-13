import React, { FC } from 'react';
import { AuthForm, Button, Modal, Portal } from '../UI';
import cn from 'classnames/bind';
import styles from './AuthModal.module.scss';
import SingImg from '../../assets/images/signInImage.png';
import RegisterImg from '../../assets/images/registerImage.png';

export interface IAuthModalProps {
  toggleActive: () => void;
  isActive: boolean;
  ModalState: 'login' | 'register';
}

const AuthModal: FC<IAuthModalProps> = ({ toggleActive, isActive, ModalState }) => {
  const cx = cn.bind(styles);
  const AuthHandler = (email: string, pass: string) => {
    console.log(email, pass);
  };
  const isLogin = ModalState === 'login';

  const AuthFooter = [
    "If you don't have an account yet, please",
    'If you already have an account, please log in',
  ];

  return (
    <>
      {isActive && (
        <Portal className={cx('AuthModal_Portal')} elementFindById={'react-modals'}>
          <Modal setIsActive={toggleActive} isActive={isActive}>
            <img
              className={cx('AuthModal_img')}
              src={isLogin ? SingImg : RegisterImg}
              alt="ModalImg"
            />
            <div className={cx('AuthModal_text')}>
              <h2 className={cx('AuthModal_header')}>
                {isLogin ? 'Welcome back' : 'Create your profile'}
              </h2>
              <div className={cx('AuthModal_form')}>
                <AuthForm handleClick={AuthHandler} />
                <span className={cx('AuthModal_footer')}>
                  {isLogin ? AuthFooter[0] : AuthFooter[1]}
                  <Button variant={'underlined'} children={isLogin ? 'Log in' : 'Sing up'} />
                </span>
              </div>
            </div>
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default AuthModal;
