import React, {useState} from 'react';
import {Modal} from '../../../components';
import styles from './modals.module.scss';
import {classNames} from '../../../utils';

const cn = classNames(styles);

export const DeleteMovie = ({history}) => {
  const redirect = () => {
    history.push('/');
  }

  return (
    <Modal closeModal={redirect} title="DELETE MOVIE">
      <h5>Are you shure you want to delete this movie?</h5>
      <div className="form-group submit-group">
        <button className="btn btn-primary" onClick={redirect}>CONFIRM</button>
      </div>
    </Modal>
  )
}