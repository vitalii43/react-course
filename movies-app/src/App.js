import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import {Footer, ErrorBoundary} from './containers';
import {Home} from './pages';

export default () => (
  <div className="main">
    <ErrorBoundary>
      <Switch>
        <Route path="/" component={Home}/>
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </ErrorBoundary>
  </div>
)
