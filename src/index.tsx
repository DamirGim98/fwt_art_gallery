import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './scss/index.scss';
import { ThemeContext } from './context/context';

const Main = () => {
  const [theme, setTheme] = useState<boolean>(false);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <App />
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Main />);
