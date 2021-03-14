import React, {useCallback, useState} from 'react';
import {Switch, Route, Link, Redirect} from "react-router-dom";

import movies from './movies.json';
import {MoviesList, Hero} from '../../components';
import {CreateMovie, EditMovie, DeleteMovie} from './Modals';

import {classNames} from '../../utils';
import styles from './Home.module.scss';

const cn = classNames(styles);

export const Home = (props) => {
  console.log(props)
  return (
    <>
      <Hero/>
      <div className={cn("movies-list-container")}>
        <nav className={cn("movies-navbar")}>
          <ul className="nav">
            <li className="nav__item">all</li>
            <li className="nav__item active">documentary</li>
            <li className="nav__item">comedy</li>
            <li className="nav__item">horror</li>
            <li className="nav__item">Crime</li>
          </ul>
          <div className={cn("movies-sort")}>
            <label className={cn("movies-sort__label")}>SORT BY</label>
            <select className={cn("movies-sort__select", "")} name="sortby" defaultValue="release">
              <option value="release">RELEASE DATE</option>
              <option value="ganre">GANRE</option>
            </select>
          </div>
        </nav>
        <div className={cn("result-count-container")}>
          <span className={cn("result-count")}>{movies.list.length}</span> movies found
        </div>
        <MoviesList movies={movies}/>
      </div>

      <Switch>
        <Route exect path="/create" component={CreateMovie}/>
        <Route exect path="/edit/:movieId" component={EditMovie}/>
        <Route exect path="/delete/:movieId" component={DeleteMovie}/>
        <Redirect to="/" />
      </Switch>
    </>
  )
}