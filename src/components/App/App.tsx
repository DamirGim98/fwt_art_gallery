import React from 'react';
import './App.scss';
import Card from '../UI/Card/Card';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper__container">
          <Card
            card={{
              name: 'Ivan Ivanov Ivanov',
              imgUrl:
                'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkELnCDvFGkCJdKZV1JBlecaaKTM5SRkZCeTgDn6uOyic',
              year: '1998 - 1999',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
