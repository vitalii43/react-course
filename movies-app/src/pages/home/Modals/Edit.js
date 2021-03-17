import React, {useState} from 'react';

import {Modal} from '../../../components';
import {MovieForm} from './MovieForm';
import styles from './modals.module.scss';
import {classNames} from '../../../utils';
import movies from '../movies.json';

const cn = classNames(styles);

export const EditMovie = ({match, history}) => {
  const {movieId} = match.params;
  const prefill = movies.list.find(item => item.id === movieId) || {};
  const redirect = () => {
    history.push('/');
  }

  return (
    <Modal closeModal={redirect} title="EDIT MOVIE">
      <div className="form-group">
        <label className="form-label">movie id</label>
        <p>{prefill.id}</p>
      </div>
      <MovieForm prefill={prefill} onSubmit={(data) => redirect()}/>
    </Modal>
  )
}