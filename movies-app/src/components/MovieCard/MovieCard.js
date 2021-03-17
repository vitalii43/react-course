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
  const onEdit = useCallback(() => {push(`/edit/${movie.id}`)}, [movie, push]);
  const onDelete = useCallback(() => {push(`/delete/${movie.id}`)}, [movie, push]);

  return (
    <>
      <div className={cn("movie-img-container")}>
        <Link to={`/details/${movie.id}`}>
          <img className={cn("movie-img")} src={movie.img} />
        </Link>
        <Menu className={cn("menu")} onDelete={onDelete} onEdit={onEdit}/>
      </div>
      <div className={cn("movie-details")}>
        <div>
          <h4 className={cn("movie-name")}>{movie.name}</h4>
          <div className={cn("movie-description")}>{movie.description}</div>
        </div>
        <div className={cn("movie-year")}>{movie.year}</div>
      </div>
    </>
  )
}

MovieCard.propTypes = {
  movie: Movie
}