import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

console.log('is precommit ok in vscode?');
ReactDOM.render(
    <Provider store={store}>
        <div>hello world</div>
    </Provider>,
    document.getElementById('root'),
);
