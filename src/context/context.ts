import React from 'react';

export interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme?: () => void;
}

export const initialState: ThemeContextType = {
  isDarkTheme: false,
};

export const ThemeContext = React.createContext<ThemeContextType>(initialState);
