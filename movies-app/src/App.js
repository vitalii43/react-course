import React from 'react';
import {Switch, Route} from "react-router-dom";

import {Footer, ErrorBoundary} from './containers';
import {Home, NotFound} from './pages';

export default () => (
  <div className="main">
    <ErrorBoundary>
      <Switch>
        <Route path="/movie" component={Home}/>
        <Route path="*" component={NotFound}/>
      </Switch>
      <Footer/>
    </ErrorBoundary>
  </div>
)
