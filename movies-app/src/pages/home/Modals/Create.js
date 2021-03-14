import React, {useState} from 'react';

import {Modal} from '../../../components';
import {MovieForm} from './MovieForm';
import styles from './modals.module.scss';
import {classNames} from '../../../utils';

const cn = classNames(styles);

export const CreateMovie = ({history}) => {
  return (
    <Modal
      closeModal={() => {
        history.push('/');
      }}
      title="CREATE MOVIE"
    >
      <MovieForm onSubmit={(data) => history.push('/')}/>
    </Modal>
  );
}