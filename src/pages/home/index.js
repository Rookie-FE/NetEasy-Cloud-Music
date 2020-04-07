import React from 'react';
import { renderRoutes } from 'react-router-config';
import Nav from '../Nav';

export default function Home(props) {
    const { route } = props;
    return (
        <>
            <Nav />
            {renderRoutes(route.routes)}
        </>
    );
}
