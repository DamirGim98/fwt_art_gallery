import React, { useState, FC } from 'react';
import { ThemeContext, ThemeContextType } from './context';

type ThemeStateProps = {
  children: React.ReactNode;
};

export const ThemeComponent: FC<ThemeStateProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<ThemeContextType['isDarkTheme']>(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};
