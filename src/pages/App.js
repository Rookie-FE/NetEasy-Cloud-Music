import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import store from '../store/index';
import routes from '../routes';

export default function App() {
    return (
        <Provider store={store}>
            <HashRouter>{renderRoutes(routes)}</HashRouter>
        </Provider>
    );
}
