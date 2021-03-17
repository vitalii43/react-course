import React from 'react';

import {Modal} from '../../../components';
import {MovieForm} from './MovieForm';
import styles from './modals.module.scss';
import {classNames} from '../../../utils';

const cn = classNames(styles);

export const CreateMovie = ({history}) => {
  const redirect = () => {
    history.push('/');
  }

  return (
    <Modal closeModal={redirect} title="CREATE MOVIE">
      <MovieForm onSubmit={(data) => redirect()}/>
    </Modal>
  );
}