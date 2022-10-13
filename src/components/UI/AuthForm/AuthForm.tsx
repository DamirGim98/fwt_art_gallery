import React, { ChangeEvent, FC, useContext, useState } from 'react';
import cn from 'classnames/bind';
import styles from './AuthForm.module.scss';
import Input from '../Input';
import Button from '../Button';
import { ThemeContext } from '../../../context/context';
import { Validate } from '../../../utils/validation';

interface IFormProps {
  handleClick: (email: string, pass: string) => void;
}

const AuthForm: FC<IFormProps> = ({ handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailError, setEmailError] = useState<null | string>(null);
  const [passwordError, setPasswordError] = useState<null | string>(null);
  const { isDarkTheme } = useContext(ThemeContext);
  const cx = cn.bind(styles);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    Validate(e, setEmailError);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
    Validate(e, setPasswordError);
  };

  return (
    <div className={cx('AuthForm')}>
      <Input
        name={'email'}
        label={'Email'}
        type={'email'}
        value={email}
        error={emailError}
        onChange={handleEmail}
      />
      <Input
        name={'password'}
        label={'Password'}
        type={'password'}
        value={pass}
        error={passwordError}
        onChange={handlePassword}
      />
      <Button
        isDisabled={!!emailError || !!passwordError}
        variant={'outlined'}
        typeButton={'submit'}
        children={'Log in'}
        theme={isDarkTheme}
        onClick={() => handleClick(email, pass)}
      />
    </div>
  );
};

export default AuthForm;
