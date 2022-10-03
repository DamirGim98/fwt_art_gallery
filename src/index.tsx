import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './scss/index.scss';
import { ThemeComponent } from './context/ThemeComponent';
import Wrapper from './components/Wrapper';
import { store } from './store/store';

const Main = () => {
  return (
    <Provider store={store}>
      <ThemeComponent>
        <Wrapper>
          <App />
        </Wrapper>
      </ThemeComponent>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Main />);
