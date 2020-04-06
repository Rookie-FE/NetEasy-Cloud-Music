import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../pages/home';
import Recommend from '../pages/recommend/Recommend';
import Singer from '../pages/singer/Singer';
import Ranking from '../pages/ranking/Ranking';

export default [
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/',
                exact: true,
                render: () => <Redirect to="/recommend" />,
            },
            {
                path: '/recommend',
                component: Recommend,
            },
            {
                path: '/singers',
                component: Singer,
            },
            {
                path: '/rank',
                component: Ranking,
            },
        ],
    },
];
