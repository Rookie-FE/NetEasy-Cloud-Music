import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import store from '../store/index';
import routes from '../routes';

export default function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                {renderRoutes(routes)}
                {/* <Switch>
                    <Redirect from='/' exact to='/recommend' />
                    <Route path='/recommend' component={Recommend} />
                    <Route path='/singer' component={Singer} />
                    <Route path='/ranking' component={Ranking} />
                    <Route path='*' component={Error} />
                </Switch> */}
            </HashRouter>
        </Provider>
    );
}
