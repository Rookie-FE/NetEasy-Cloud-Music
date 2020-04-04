import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Recommend from './recommend/Recommend';
import Singer from './singer/Singer';
import Ranking from './ranking/Ranking';
import Error from '../component/Error';
import Nav from './Nav'


export default function App(){
    return (
        <HashRouter>
            <Nav/>
            <Switch>
                <Redirect from='/' exact to='/recommend' />
                <Route path='/recommend' component={Recommend} />
                <Route path='/singer' component={Singer} />
                <Route path='/ranking' component={Ranking} />
                <Route path='*' component={Error} />
            </Switch>
        </HashRouter>
    )
}
