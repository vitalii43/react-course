import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import {Footer, ErrorBoundary} from './containers';
import {Home} from './pages';

export default () => (
  <div className="main">
    <ErrorBoundary>
      <Switch>
        <Route path="/movie" component={Home}/>
        <Redirect to="/movie" />
      </Switch>
      <Footer/>
    </ErrorBoundary>

  </div>
)
