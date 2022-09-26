import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './scss/index.scss';
import { ThemeComponent } from './context/ThemeComponent';

const Main = () => {
  return (
    <React.StrictMode>
      <ThemeComponent>
        <App />
      </ThemeComponent>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Main />);
