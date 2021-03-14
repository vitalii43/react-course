import React from 'react';
import PropTypes from 'prop-types';

import {Header, Footer} from '../../containers'
import {classNames} from '../../utils';
import styles from './Modal.module.scss';

const cn = classNames(styles);

export const Modal = (props) => {
  const {
    closeModal,
    title
  } = props;

  return (
    <div className={cn('modal')}>
      <Header>
        <span className={cn("logo")}><span className={cn("netflix")}>netflix</span>rolette</span>
      </Header>
      <div className={cn("modal-body-container")}>
        <div className={cn("modal-body")}>
          <div className={cn("modal-close")} onClick={(e) => closeModal(e)}>
            <i className="fa fa-times-thin fa-2x"></i>
          </div>
          <h1 className="h1">{title}</h1>
          {props.children}
        </div>
      </div>
      <div className={cn('footer_modal')}>
        <Footer/>
      </div>
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
}