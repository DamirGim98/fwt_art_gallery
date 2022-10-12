import React, { FC, useContext, useState } from 'react';
import cn from 'classnames/bind';
import styles from './AuthForm.module.scss';
import Input from '../Input';
import Button from '../Button';
import { ThemeContext } from '../../../context/context';

interface IFormProps {
  handleClick: (email: string, pass: string) => void;
}

const AuthForm: FC<IFormProps> = ({ handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { isDarkTheme } = useContext(ThemeContext);
  const cx = cn.bind(styles);

  return (
    <div className={cx('AuthForm')}>
      <Input
        name={'email'}
        label={'Email'}
        type={'email'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name={'password'}
        label={'Password'}
        type={'password'}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <Button
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
