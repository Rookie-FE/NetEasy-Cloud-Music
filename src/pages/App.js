import React from 'react';
import { HashRouter, Route, Switch, Redirect,withRouter } from 'react-router-dom';
import FoundMusic from './foundMusic/FoundMusic';
import MyMusic from './myMusic/MyMusic';
import Friends from './friends/Friends';
import Error from '../component/Error'

function TopNav(props){
    return(
        <>
        <button onClick={() => {
                props.history.push('/found')
            }}>发现音乐</button>
            <button onClick={() => {
                props.history.push('/my')
            }}>我的音乐</button>
            <button onClick={() => {
                props.history.push('/friend')
            }}>朋友</button>
        </>
    )
}

let Nav = withRouter(TopNav)

export default function App(){
    return (
        <HashRouter>
            <Nav/>
            <Switch>
                <Redirect from='/' exact to='/found' />
                <Route path='/found' component={FoundMusic} />
                <Route path='/my' component={MyMusic} />
                <Route path='/friend' component={Friends} />
                <Route path='*' component={Error} />
            </Switch>
        </HashRouter>
    )
}
