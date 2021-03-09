import React from 'react';
import {Footer, ErrorBoundary} from './containers';
import {Home} from './pages';

export default () => (
  <div className="main">
    <ErrorBoundary>
      <Home/>
      <Footer/>
    </ErrorBoundary>
  </div>
)
