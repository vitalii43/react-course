import React from 'react';
import {Link} from "react-router-dom";

import {Header} from '../../containers';
import {HeroBackground} from '../../components';
import {classNames} from '../../utils';
import styles from './Home.module.scss';

const cn = classNames(styles);

export const Search = (props) => {
  return (
    <HeroBackground>
      <Header>
        <span className={cn("logo")}><span className={cn("netflix")}>netflix</span>rolette</span>
        <Link className="btn btn-secondary" to="/movie/create">+ ADD MOVIE</Link>
      </Header>
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
    </HeroBackground>
  )
}
