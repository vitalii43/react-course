import React, {useState} from 'react';

import {Modal} from '../../../components';
import {MovieForm} from './MovieForm';
import styles from './modals.module.scss';
import {classNames} from '../../../utils';
import movies from '../movies.json';

const cn = classNames(styles);

export const EditMovie = (props) => {
  const {movieId} = props.match.params;
  const prefill = movies.list.find(item => item.id === movieId) || {};

  return (
    <Modal 
      closeModal={() => {
        props.history.push('/');
      }}
      title="EDIT MOVIE"
    >
      <div className="form-group">
        <label className="form-label">movie id</label>
        <p>{prefill.id}</p>
      </div>
      <MovieForm 
        prefill={prefill}
        onSubmit={(data) => props.history.push('/')}
      />
    </Modal>
  )
}