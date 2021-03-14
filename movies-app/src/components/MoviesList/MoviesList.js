import React from 'react';

import {classNames} from '../../utils';
import styles from './MoviesList.module.scss';
import {MovieCard} from '../MovieCard';
import PropTypes from 'prop-types';

const cn = classNames(styles);

export const MoviesList = ({movies}) => {
  return (
    <div className={cn("movie-card-list")}>
      {movies.list.map((movie) => (
        <div className={cn("movie-card")} key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.shape({
    list: PropTypes.array.isRequired
  }).isRequired
}