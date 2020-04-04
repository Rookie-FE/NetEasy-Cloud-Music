import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './pages/App';
import './assets/reset.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
