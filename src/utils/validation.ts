import { SetStateAction, Dispatch, ChangeEvent } from 'react';

export const Validate = (
  event: ChangeEvent<HTMLInputElement>,
  setError: Dispatch<SetStateAction<string | null>>,
) => {
  const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const e = event.target;
  switch (event.target.name) {
    case 'email':
      if (e.value.length === 0) {
        setError('Email field cannot be empty');
      } else if (reg.test(String(e.value).toLowerCase())) {
        setError(null);
      } else {
        setError('Invalid email type');
      }
      break;
    case 'password':
      if (e.value.length === 0) {
        setError('Password field cannot be empty');
      } else if (e.value.length < 10) {
        setError('Password least 10 characters long');
      } else {
        setError(null);
      }
      break;
    default:
  }
};
