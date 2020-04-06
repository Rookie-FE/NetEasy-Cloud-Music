import React, { useEffect } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Recommend from './recommend/Recommend';
import Singer from './singer/Singer';
import Ranking from './ranking/Ranking';
import Error from '../component/Error';
import Nav from './Nav';
import request from '../api/request';

export default function App() {
    useEffect(() => {
        async function getData() {
            try {
                let data = await request.Login();
                console.log(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getData();
    }, []);
    return (
        <HashRouter>
            <Nav />
            <Switch>
                <Redirect from="/" exact to="/recommend" />
                <Route path="/recommend" component={Recommend} />
                <Route path="/singer" component={Singer} />
                <Route path="/ranking" component={Ranking} />
                <Route path="*" component={Error} />
            </Switch>
        </HashRouter>
    );
}
