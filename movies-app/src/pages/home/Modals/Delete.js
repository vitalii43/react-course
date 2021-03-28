import React, {useState} from 'react';
import {Modal} from '../../../components';
import {deleteMovie} from '../../../store/movies'
import styles from './modals.module.scss';
import {classNames} from '../../../utils';
import { connect } from 'react-redux';

const cn = classNames(styles);

const DeleteMovie = ({history, deleteMovie, match}) => {
  const redirect = () => {
    history.push('/');
  }
  const deleteMovieWrapper = () => {
    deleteMovie(match.params.movieId);
  }


  return (
    <Modal closeModal={redirect} title="DELETE MOVIE">
      <h5>Are you shure you want to delete this movie?</h5>
      <div className="form-group submit-group">
        <button className="btn btn-primary" onClick={deleteMovieWrapper}>CONFIRM</button>
      </div>
    </Modal>
  )
}

const mapStateToProps = (dispatch) => {
  return {
    deleteMovie: (id) => dispatch(deleteMovie(id))
  }
}

export default connect(null, mapStateToProps)(DeleteMovie);
