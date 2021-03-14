import React from 'react';

import {Link} from 'react-router-dom';
import {classNames} from '../../utils';
import styles from './Hero.module.scss';
import {Header} from '../../containers';
import heroImg from '../../assets/hero-img.jpg';

const cn = classNames(styles);

export const Hero = (props) => (
  <div className={cn("hero")}>
    <Header>
      <span className={cn("logo")}><span className={cn("netflix")}>netflix</span>rolette</span>
      <Link className="btn btn-secondary" to="/create">+ ADD MOVIE</Link>
    </Header>

    <div className={cn("hero-background")}>
      <div className={cn("hero-img-wrapper")}>
        <img className={cn("hero-img")} src={heroImg}/>
        <div className={cn("hero-gradient")}></div>
      </div>
    </div>

    <section className={cn("search")}>
      <h1 className={cn("search__header")}>FIND YOUR MOVIE</h1>
      <div className={cn("search-body")}>
        <input 
          type="text" 
          className={cn("search__input")}
          placeholder="What do you want to watch?"
        />
        <button className={`btn btn-primary ${cn("search__btn")}`}>search</button>
      </div>
    </section>
  </div>
)