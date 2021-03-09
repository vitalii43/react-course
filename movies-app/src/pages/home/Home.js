import React from 'react';

import movies from './movies.json';
import {MoviesList, Hero} from '../../components';
import {classNames} from '../../utils';
import styles from './Home.module.scss';

const cn = classNames(styles);

export const Home = () => {
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
            <select className={cn("movies-sort__select")} name="sortby" defaultValue="release">
              <option value="release">RELEASE DATE</option>
              <option value="ganre" >GANRE</option>
            </select>
          </div>
        </nav>

        <div className={cn("result-count-container")}>
          <span className={cn("result-count")}>{movies.list.length}</span> movies found
        </div>
        <MoviesList movies={movies}/>

      </div>
    </>
  )
}