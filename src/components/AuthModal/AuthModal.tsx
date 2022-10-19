import React, { FC, useContext, useState } from 'react';
import cn from 'classnames/bind';
import { AuthForm, Button, Modal, Portal } from '../UI';
import styles from './AuthModal.module.scss';
import SingImg from '../../assets/images/signInImage.png';
import RegisterImg from '../../assets/images/registerImage.png';
import { ThemeContext } from '../../context/context';

export interface IAuthModalProps {
  toggleActive: () => void;
  isActive: boolean;
  isModalLogin: boolean;
}

const AuthModal: FC<IAuthModalProps> = ({ toggleActive, isActive, isModalLogin }) => {
  const cx = cn.bind(styles);

  const [isLogin, setIsLogin] = useState<boolean>(isModalLogin);

  const { isDarkTheme } = useContext(ThemeContext);

  const AuthFooter = [
    "If you don't have an account yet, please",
    'If you already have an account, please',
  ];

  return (
    <Portal className={cx('AuthModal', { dark: isDarkTheme })} elementFindById={'react-modals'}>
      <Modal className={cx('AuthModal_content')} setIsActive={toggleActive} isActive={isActive}>
        <img className={cx('AuthModal_img')} src={isLogin ? SingImg : RegisterImg} alt="ModalImg" />
        <div className={cx('AuthModal_text')}>
          <h2 className={cx('AuthModal_header')}>
            {isLogin ? 'Welcome back' : 'Create your profile'}
          </h2>
          <div className={cx('AuthModal_form')}>
            <AuthForm buttonTitle={isLogin ? 'log in' : 'sign up'} />
            <span className={cx('AuthModal_footer')}>
              {isLogin ? AuthFooter[0] : AuthFooter[1]}
              <Button
                theme={isDarkTheme}
                className={cx('AuthModal_handleState')}
                variant={'underlined'}
                children={isLogin ? 'Sign up' : 'Log in'}
                onClick={() => setIsLogin(!isLogin)}
              />
            </span>
          </div>
        </div>
      </Modal>
    </Portal>
  );
};

export default AuthModal;
