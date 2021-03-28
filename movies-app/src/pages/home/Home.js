import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from 'react-redux';

import {MoviesList} from '../../components';
import {CreateMovie, EditMovie, DeleteMovie} from './Modals';
import {Search} from './Search';
import Details from './Details';
import {useScrollTop} from './Hooks';
import {classNames} from '../../utils';
import styles from './Home.module.scss';
import {getMovies} from '../../store/movies'

const cn = classNames(styles);

const Home = (props) => {
  const {getMovies, movies} = props;
  // custom hook
  useScrollTop();

  useEffect(() => {
    getMovies()
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/movie" component={Search} />
        <Route exact path="/movie/details/:movieId" component={Details} />
      </Switch>

      <div className={cn("movies-list-container")}>
        <nav className={cn("movies-navbar")}>
          <ul className="nav">
            <li className="nav__item">all</li>
            <li className="nav__item active">documentary</li>
            <li className="nav__item">comedy</li>
            <li className="nav__item">horror</li>
            <li className="nav__item">Crime</li>
          </ul>
          <div className={cn("movies-sort")}>
            <label className={cn("movies-sort__label")}>SORT BY</label>
            <select className={cn("movies-sort__select", "")} name="sortby" defaultValue="release">
              <option value="release">RELEASE DATE</option>
              <option value="ganre">GANRE</option>
            </select>
          </div>
        </nav>
        <div className={cn("result-count-container")}>
          <span className={cn("result-count")}>{movies.list.length}</span> movies found
        </div>
        <MoviesList movies={movies}/>
      </div>

      <Switch>
        <Route exact path="/movie/create" component={CreateMovie}/>
        <Route exact path="/movie/edit/:movieId" component={EditMovie}/>
        <Route exact path="/movie/delete/:movieId" component={DeleteMovie}/>
        <Redirect to="/movie" />
      </Switch>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMovies: () => dispatch({type: 'REQUEST_MOVIES'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
