import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import todoStore from './store/todoStore';

ReactDOM.render(
  <Provider store={todoStore}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);