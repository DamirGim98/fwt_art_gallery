import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './scss/index.scss';
import { ThemeComponent } from './context/ThemeComponent';
import Wrapper from './components/Wrapper';

const Main = () => {
  return (
    <React.StrictMode>
      <ThemeComponent>
        <Wrapper>
          <App />
        </Wrapper>
      </ThemeComponent>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Main />);
