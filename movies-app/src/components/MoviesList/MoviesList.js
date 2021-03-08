import React from 'react';

import {classNames} from '../../utils';
import styles from './MoviesList.module.scss';
import {MovieCard} from '../MovieCard';
import PropTypes from 'prop-types';

const cn = classNames(styles);

export const MoviesList = ({movies}) => {
  return (
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

      <div className={cn("movie-card-list")}>
        {movies.list.map((movie) => (
          <div className={cn("movie-card")} key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.shape({
    list: PropTypes.array.isRequired
  }).isRequired
}