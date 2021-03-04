import React from 'react';
import {Footer, ErrorBoundary} from './containers';
import {Hero, MoviesList} from './components';
import movies from './movies.json';

export default () => (
  <div className="main">
    <ErrorBoundary>
      <Hero/>
      <MoviesList movies={movies}/>
      <Footer/>
    </ErrorBoundary>
  </div>
)
