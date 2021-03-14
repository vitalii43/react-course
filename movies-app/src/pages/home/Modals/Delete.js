import React, {useState} from 'react';
import {Modal} from '../../../components';
import styles from './modals.module.scss';
import {classNames} from '../../../utils';

const cn = classNames(styles);

export const DeleteMovie = (props) => {
  const onDeleteMovie = (e) => {
    setShowModal(false);
  }

  return (
    <Modal 
      closeModal={() => {
        props.history.push('/');
      }}
      title="DELETE MOVIE"
    >
      <h5>Are you shure you want to delete this movie?</h5>
      <div className="form-group submit-group">
        <button className="btn btn-primary" onClick={onDeleteMovie}>CONFIRM</button>
      </div>
    </Modal>
  )
}