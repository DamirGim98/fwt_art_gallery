import React, { FC, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './AuthForm.module.scss';
import Input from '../Input';
import Button from '../Button';
import { ThemeContext } from '../../../context/context';
import { useInput } from '../../../hooks/useInput';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { authenticateUser, selectFingerprint } from '../../../store/Slice/AuthSlice';

interface IFormProps {
  buttonTitle: string;
}

const AuthForm: FC<IFormProps> = ({ buttonTitle }) => {
  const email = useInput('', { checkEmail: true });
  const pass = useInput('', { checkPasswordLength: true });

  const fingerprint = useAppSelector((state) => selectFingerprint(state));

  const dispatch = useAppDispatch();

  const { isDarkTheme } = useContext(ThemeContext);

  const cx = cn.bind(styles);

  const handleAuth = () => {
    dispatch(authenticateUser({ username: email.value, password: pass.value, fingerprint }));
  };

  return (
    <div className={cx('AuthForm')}>
      <Input
        name={'email'}
        label={'Email'}
        type={'email'}
        value={email.value}
        error={email.value && email.isError}
        onChange={email.onInputChange}
      />
      <Input
        name={'password'}
        label={'Password'}
        type={'password'}
        value={pass.value}
        error={pass.value && pass.isError}
        onChange={pass.onInputChange}
      />
      <Button
        className={cx('AuthForm_button')}
        isDisabled={!!email.isError || !!pass.isError}
        variant={'outlined'}
        typeButton={'submit'}
        children={buttonTitle}
        theme={isDarkTheme}
        onClick={handleAuth}
      />
    </div>
  );
};

export default AuthForm;
