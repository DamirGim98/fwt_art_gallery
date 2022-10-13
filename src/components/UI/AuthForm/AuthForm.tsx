import React, { FC, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './AuthForm.module.scss';
import Input from '../Input';
import Button from '../Button';
import { ThemeContext } from '../../../context/context';
import { useInput } from '../../../hooks/useInput';

interface IFormProps {
  handleClick: (email: string, pass: string) => void;
}

const AuthForm: FC<IFormProps> = ({ handleClick }) => {
  const email = useInput('', { checkEmail: true });
  const pass = useInput('', { checkPasswordLength: true });
  const { isDarkTheme } = useContext(ThemeContext);
  const cx = cn.bind(styles);

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
        isDisabled={!!email.isError || !!pass.isError}
        variant={'outlined'}
        typeButton={'submit'}
        children={'Log in'}
        theme={isDarkTheme}
        onClick={() => handleClick(email.value, pass.value)}
      />
    </div>
  );
};

export default AuthForm;
