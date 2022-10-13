import { useEffect, useState } from 'react';

type ValidationTypes = 'checkPasswordLength' | 'checkEmail';

export type Validations = {
  [K in ValidationTypes]?: number | boolean;
};

export const useValidation = (value: string, validations: Validations) => {
  const [isError, setIsError] = useState<null | string>(null);
  const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  useEffect(() => {
    Object.keys(validations).forEach((validation) => {
      switch (validation) {
        case 'checkEmail':
          if (!reg.test(String(value).toLowerCase())) setIsError('Invalid email');
          else setIsError(null);
          break;
        case 'checkPasswordLength':
          if (value.length === 0) setIsError('Password field cannot be empty');
          else if (value.length < 6) setIsError('Password is least 6 characters long');
          else if (value.length > 25) setIsError('Password is max 20 characters long');
          else setIsError(null);
          break;
        default:
      }
    });
  }, [value]);

  return {
    isError,
  };
};
