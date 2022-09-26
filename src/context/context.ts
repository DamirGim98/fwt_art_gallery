import React from 'react';

interface ThemeContextType {
  theme: boolean;
  toggleTheme?: () => void;
}

export const initialState: ThemeContextType = {
  theme: false,
};

export const ThemeContext = React.createContext<ThemeContextType>(initialState);
