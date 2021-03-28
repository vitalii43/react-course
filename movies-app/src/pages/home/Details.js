import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";


import {Movie} from '../../types';
import {getMovie} from '../../store/movies';
import {Header} from '../../containers';
import {HeroBackground} from '../../components';
import {classNames} from '../../utils';
import styles from './Home.module.scss';

const cn = classNames(styles);

const Details = (props) => {
  const {movie, getMovie, match} = props; 

  useEffect(() => {
    getMovie(match.params.movieId);
  }, [match.params.movieId]);

  if (!movie) {
    return null;
  }

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
          <img className={cn("movie-img")} src={movie.poster_path || ''} />
        </div>
        <div className={cn("details-body")}>
          <div className={cn("header-wrapper", "details-item")}>
            <h1 className={cn("h1", "header")}>{movie.title}</h1>
            <div className={cn("rating")}>{movie.vote_average}</div>
          </div>
          <h5 className={cn("h5", "details-item")}>{movie.overview}</h5>
          <div className={cn("display-flex", "details-item")}>
            <span className={cn("release-date")}>{movie.release_date}</span>
            <span className={cn("diration-time")}>{movie.runtime || '120'} min</span>
          </div>
          <div className={cn("details-items")}>{movie.tagline}</div>
        </div>
      </section>
    </HeroBackground>
  )
}

Details.propTypes = {
  movie: Movie
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies.movie
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => dispatch(getMovie(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
