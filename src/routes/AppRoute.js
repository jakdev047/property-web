import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";


// pages
import Header from '../layer/Header';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';


const AppRoute = () => {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Fragment>
    )
}

export default AppRoute; 