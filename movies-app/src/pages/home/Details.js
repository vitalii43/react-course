import React from 'react';
import {Link} from "react-router-dom";

import {Movie} from '../../types';
import {Header} from '../../containers';
import {HeroBackground} from '../../components';
import movies from './movies.json';
import {classNames} from '../../utils';
import styles from './Home.module.scss';

const cn = classNames(styles);

export const Details = (props) => {
  const movie = movies.list.find(movie => movie.id === props.match.params.movieId)

  return (
    <HeroBackground>
      <Header>
        <span className={cn("logo")}><span className={cn("netflix")}>netflix</span>rolette</span>
        <Link to="/">
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </Link>
      </Header>
      <section className={cn('details')}>
        <div className={cn("movie-img-container")}>
          <img className={cn("movie-img")} src={movie.img} />
        </div>
        <div className={cn("details-body")}>
          <div className={cn("header-wrapper", "details-item")}>
            <h1 className={cn("h1", "header")}>{movie.name}</h1>
            <div className={cn("rating")}>{movie.rating}</div>
          </div>
          <h5 className={cn("h5", "details-item")}>{movie.description}</h5>
          <div className={cn("display-flex", "details-item")}>
            <span className={cn("release-date")}>{movie.year}</span>
            <span className={cn("diration-time")}>{movie.duration} min</span>
          </div>
          <div className={cn("details-items")}>{movie.overview}</div>
        </div>
      </section>
    </HeroBackground>
  )
}

Details.propTypes = {
  movie: Movie
}