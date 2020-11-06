import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";


// pages
import Header from '../layer/Header';
import Home from '../pages/Home';
import Todo from '../pages/Todo';
import CsvFile from '../pages/CsvFile';
import NotFound from '../pages/NotFound';


const AppRoute = () => {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/todo' component={Todo} />
                <Route exact path='/csv-file' component={CsvFile} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Fragment>
    )
}

export default AppRoute; 