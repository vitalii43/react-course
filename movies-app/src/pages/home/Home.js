import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import movies from './movies.json';
import {MoviesList} from '../../components';
import {CreateMovie, EditMovie, DeleteMovie} from './Modals';
import {Search} from './Search';
import {Details} from './Details';
import {useScrollTop} from './Hooks';
import {classNames} from '../../utils';
import styles from './Home.module.scss';

const cn = classNames(styles);

export const Home = () => {
  useScrollTop();
  return (
    <>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/details/:movieId" component={Details} />
      </Switch>

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
        <Route exact path="/create" component={CreateMovie}/>
        <Route exact path="/edit/:movieId" component={EditMovie}/>
        <Route exact path="/delete/:movieId" component={DeleteMovie}/>
        <Redirect to="/" />
      </Switch>
    </>
  )
}