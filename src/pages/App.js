import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from '../routes';
import Nav from './Nav';

export default function App() {
    return (
        <HashRouter>
            <Nav />
            {renderRoutes(routes)}
            {/* <Switch>
                <Redirect from='/' exact to='/recommend' />
                <Route path='/recommend' component={Recommend} />
                <Route path='/singer' component={Singer} />
                <Route path='/ranking' component={Ranking} />
                <Route path='*' component={Error} />
            </Switch> */}
        </HashRouter>
    );
}
