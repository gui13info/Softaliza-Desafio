import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShowEvents from './pages/ShowEvents'
import EventsDetails from './pages/EventsDetails'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/show-events" component={ShowEvents} />
        <Route path="/events-details/:id" component={EventsDetails} />
    </Switch>
);

export default Routes;