import React, { useCallback } from 'react';
import { useHistory, Link } from "react-router-dom";

import {Menu} from './Menu';
import {Movie} from '../../types';
import {classNames} from '../../utils';
import styles from './MovieCard.module.scss';

const cn = classNames(styles);

export const MovieCard = (props) => {
  const {movie} = props;
  const {push} = useHistory();
  const onEdit = useCallback(() => {push(`/movie/edit/${movie.id}`)}, [movie.id, push]);
  const onDelete = useCallback(() => {push(`/movie/delete/${movie.id}`)}, [movie.id, push]);

  if (!movie) {
    return null;
  }

  return (
    <>
      <div className={cn("movie-img-container")}>
        <Link to={`/movie/details/${movie.id}`}>
          <img className={cn("movie-img")} src={movie.poster_path || ''} />
        </Link>
        <Menu className={cn("menu")} onDelete={onDelete} onEdit={onEdit}/>
      </div>
      <div className={cn("movie-details")}>
        <div>
          <h4 className={cn("movie-name")}>{movie.title}</h4>
          <div className={cn("movie-description")}>{movie.genres && movie.genres.join(', ')}</div>
        </div>
        <div className={cn("movie-year")}>{movie.release_date && new Date(movie.release_date).getFullYear()}</div>
      </div>
    </>
  )
}

MovieCard.propTypes = {
  movie: Movie
}
