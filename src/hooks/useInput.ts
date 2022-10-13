import { ChangeEvent, useState } from 'react';
import { useValidation } from './useValidation';
import type { Validations } from './useValidation';

export const useInput = (initialValue: string, validations: Validations) => {
  const [value, setValue] = useState('');
  const valid = useValidation(value, validations);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onInputChange,
    ...valid,
  };
};
