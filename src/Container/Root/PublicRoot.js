import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../../Utilites/Index';

function PublicRoot({ component: Component, restricted = false, ...rest }) {
    return (

        <Route {...rest}
            render={props => (
                isLogin() && restricted === true ?
                    <Redirect to={"/"} />
                    : <Component  {...props} />
            )} />
    );
}

export default PublicRoot;