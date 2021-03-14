import React from 'react';
import { useHistory } from "react-router-dom";

import {Menu} from './Menu';
import {classNames} from '../../utils';
import styles from './MovieCard.module.scss';
import PropTypes from 'prop-types';

const cn = classNames(styles);

export const MovieCard = ({movie}) => {
  const {push} = useHistory();

  return (
    <React.Fragment>
      <div className={cn("movie-img-container")}>
        <img className={cn("movie-img")} src={movie.img} />
        <Menu className={cn("menu")}
          onEdit={() => push(`/edit/${movie.id}`)}
          onDelete={() => push(`/delete/${movie.id}`)}
        />
      </div>
      <div className={cn("movie-details")}>
        <div>
          <h4 className={cn("movie-name")}>{movie.name}</h4>
          <div className={cn("movie-description")}>{movie.description}</div>
        </div>
        <div className={cn("movie-year")}>{movie.year}</div>
      </div>
    </React.Fragment>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  })
}