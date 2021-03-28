import React, {useCallback, useEffect} from 'react';

import {Modal} from '../../../components';
import {getMovie, updateMovie} from '../../../store/movies';
import {MovieForm} from './MovieForm';
import styles from './modals.module.scss';
import {classNames} from '../../../utils';
import { connect } from 'react-redux';

const cn = classNames(styles);

const EditMovie = (props) => {
  const {match, history, getMovie, movie, updateMovie} = props;
  const {movieId} = match.params;

  useEffect(() => {
    getMovie(movieId);
  }, [movieId]);
  console.log(movie)

  const handleSubmit = useCallback((data) => {
    updateMovie(movieId, data)
  }, [movieId, movie]);

  const redirect = useCallback(() => { history.push('/') }, [history]);

  if (!movie) return null

  return (
    <Modal closeModal={redirect} title="EDIT MOVIE">
      <div className="form-group">
        <label className="form-label">movie id</label>
        <p>{movie.id}</p>
      </div>
      <MovieForm prefill={movie} onSubmit={handleSubmit}/>
    </Modal>
  )
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => dispatch(getMovie(id)),
    updateMovie: (id, data) => dispatch(updateMovie(id, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);
