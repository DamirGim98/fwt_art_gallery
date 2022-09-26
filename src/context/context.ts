import React from 'react';

export interface ThemeContextType {
  theme: boolean;
  toggleTheme?: () => void;
}

export const initialState: ThemeContextType = {
  theme: false,
};

export const ThemeContext = React.createContext<ThemeContextType>(initialState);
