import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {Button} from 'antd'

ReactDOM.render(
  <Provider store={store}>
    <div>hello world 
    <Button type="primary">Button</Button>
    </div>
  </Provider>,
  document.getElementById('root')
);
