import React from 'react';
import styles from './MovieCard.scss';
import PropTypes from 'prop-types';

export const MovieCard = ({movie}) => {

  return (
    <React.Fragment>
      <div className="movie-img-container">
        <img className="movie-img" src={movie.img} />
      </div>
      <div className="movie-details">
        <div>
          <h4 className="movie-name">{movie.name}</h4>
          <div className="movie-description">{movie.description}</div>
        </div>
        <div className="movie-year">{movie.year}</div>
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