import React from 'react';
import styles from './styles.module.scss'
import {classNames} from '../utils';

const cn = classNames(styles);

export const Footer = (props) => {
  return (
    <footer className={cn('footer', props.className)}>
      <span className={cn('logo')}><span className={cn('netflix')}>netflix</span>rolette</span>
    </footer>
  )
};
