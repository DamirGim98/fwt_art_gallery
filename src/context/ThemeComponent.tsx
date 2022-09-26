import React, { useState, FC } from 'react';
import { ThemeContext, ThemeContextType } from './context';

type ThemeStateProps = {
  children: React.ReactNode;
};

export const ThemeComponent: FC<ThemeStateProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType['theme']>(false);
  const toggleTheme = () => {
    setTheme(!theme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
