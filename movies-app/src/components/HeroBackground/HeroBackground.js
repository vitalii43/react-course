import React from 'react';

import {classNames} from '../../utils';
import styles from './Hero.module.scss';
import heroImg from '../../assets/hero-img.jpg';

const cn = classNames(styles);

export const HeroBackground = (props) => (
  <div className={`${props.className} ${cn("hero")}`}>
    <div className={cn("hero-background")}>
      <div className={cn("hero-img-wrapper")}>
        <img className={cn("hero-img")} src={heroImg}/>
        <div className={cn("hero-gradient")}></div>
      </div>
    </div>
    {props.children}
  </div>
)