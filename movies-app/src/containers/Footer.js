import React from 'react';
import styles from './styles.module.scss'
import {classNames} from '../utils';

const cn = classNames(styles);

export const Footer = () => (
  <footer className={cn('footer')}>
    <span className={cn('logo')}><span className={cn('netflix')}>netflix</span>rolette</span>
  </footer>
);