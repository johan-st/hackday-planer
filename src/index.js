import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalContext } from './GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext.Provider>
      <App />
    </GlobalContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
