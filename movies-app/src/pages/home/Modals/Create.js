import React, {useCallback} from 'react';

import {Modal} from '../../../components';
import {MovieForm} from './MovieForm';
import {createMovie} from '../../../store/movies';
import styles from './modals.module.scss';
import {classNames} from '../../../utils';
import { connect } from 'react-redux';

const cn = classNames(styles);

const CreateMovie = ({history, createMovie}) => {
  const redirect = () => {
    history.push('/');
  }

  const createMovieWrapper = useCallback((data) => {
    createMovie(data);
  }, []);

  return (
    <Modal closeModal={redirect} title="CREATE MOVIE">
      <MovieForm onSubmit={createMovieWrapper}/>
    </Modal>
  );
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createMovie: (data) => dispatch(createMovie(data))
  }
}

export default connect(null, mapDispatchToProps)(CreateMovie);
