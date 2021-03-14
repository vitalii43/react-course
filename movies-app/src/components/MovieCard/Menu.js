import React, {useState} from 'react';

import {classNames} from '../../utils';
import styles from './MovieCard.module.scss';
import PropTypes from 'prop-types';

const cn = classNames(styles);

export const Menu = (props) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const showMenu = (flag) => {
    flag && setMenuStatus(true);
    !flag && setMenuStatus(false);
  }

  const handleMenu = (action) => {
    switch (action) {
      case 'close': 
        setMenuStatus(false);
        break;
      case 'edit':
        props.onEdit();
        showMenu(false);
        break;
      case 'delete':
        props.onDelete();
        showMenu(false);
        break;
    }
  }

  return (
    <div className={props.className}>
      <div 
        className={cn('menu-opener', menuStatus ? 'hidden' : '')} 
        onClick={() => showMenu(true)}>
        <i className={cn("fa", "fa-ellipsis-v", "menu-icon")} aria-hidden="true"></i>
      </div>
      <div className={cn('menu-body', menuStatus ? 'active' : '')}>
        <div name="close" className={cn('menu-close-btn')}
          onClick={() => handleMenu('close')}
        >
          <i className="fa fa-times-thin"></i>
        </div>
        <div name="edit" className={cn('menu-item')} 
          onClick={() => handleMenu('edit')}>Edit</div>
        <div name="delete" className={cn('menu-item')}
          onClick={() => handleMenu('delete')}>Delete</div>
      </div>
    </div>
  )
}

Menu.propTypes = {
}