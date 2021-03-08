import React from 'react';
import styles from './styles.module.scss'
import {classNames} from '../utils';

const cn = classNames(styles);

export const Header = (props) => {
  return (
    <header className={cn('header')}>{props.children}</header>
  )
}