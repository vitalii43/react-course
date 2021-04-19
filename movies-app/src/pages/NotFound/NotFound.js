import React from 'react';
import {Link} from 'react-router-dom';

import {Header, Footer} from '../../containers'
import {classNames} from '../../utils';
import styles from './NotFound.module.scss';

const cn = classNames(styles);

const NotFound = () => {
  return (
    <div className={cn('page-container')}>
      <Header>
        <span className="logo"><span className="netflix">netflix</span>rolette</span>
      </Header>
      <div className={cn("body")}>
        <h2 className="h2">Page Not Found</h2>
        <Link to="/movie">
          <button className="btn btn-outline-primary">GO BACK TO HOME</button>
        </Link>
      </div>
      <Footer className={cn('footer')}/>
    </div>
  )
}

export default NotFound;
