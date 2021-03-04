import React from 'react';
import styles from './MoviesList.scss';
import {MovieCard} from '../MovieCard';
import PropTypes from 'prop-types';

export const MoviesList = ({movies}) => {
  return (
    <div className="movies-list-container">
      <nav className="movies-navbar">
        <ul className="nav">
          <li className="nav__item">all</li>
          <li className="nav__item active">documentary</li>
          <li className="nav__item">comedy</li>
          <li className="nav__item">horror</li>
          <li className="nav__item">Crime</li>
        </ul>
        <div className="movies-sort">
          <label className="movies-sort__label">SORT BY</label>
          <select className="movies-sort__select" name="sortby" defaultValue="release">
            <option value="release">RELEASE DATE</option>
            <option value="ganre" >GANRE</option>
          </select>
        </div>
      </nav>

      <div className="result-count-container">
        <span className="result-count">{movies.list.length}</span> movies found
      </div>

      <div className="movie-card-list">
        {movies.list.map((movie) => (
          <div className="movie-card" key={movie.id}>
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