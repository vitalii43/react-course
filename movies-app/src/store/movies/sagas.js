import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { goBack, push } from 'connected-react-router';

import { getMovies } from './actions';
import * as types from './constants';

const makeRequest = (url, options) => fetch(url, options).then(data => data.json());

function* fetchMovies(action) {
   try {
      const movies = yield call(makeRequest, 'http://localhost:4000/movies');
      yield put({type: types.REQUEST_MOVIES_SUCCESS, movies: movies});
   } catch (e) {
      yield put({type: types.REQUEST_MOVIES_FAIL, message: e.message});
   }
}

function* fetchMovie(action) {
   try {
      const movie = yield call(makeRequest, `http://localhost:4000/movies/${action.payload.id}`);
      yield put({type: types.REQUEST_MOVIE_SUCCESS, payload: movie});
   } catch (e) {
      yield put({type: types.REQUEST_MOVIE_FAIL, message: e.message});
   }
}

function* updateMovie(action) {
   try {
      yield call(
        makeRequest, 
        `http://localhost:4000/movies`,
        {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(action.payload.data)
        }
      );
      yield put(getMovies());
      yield put(goBack());
   } catch (e) {
      yield put({type: types.REQUEST_MOVIE_FAIL, message: e.message});
   }
}

function* createMovie(action) {
   try {
      yield call(
        makeRequest, 
        `http://localhost:4000/movies`,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(action.payload)
        }
      );
      yield put(getMovies());
      yield put(goBack());
   } catch (e) {
      yield put({type: types.REQUEST_MOVIE_FAIL, message: e.message});
   }
}

function* deleteMovie(action) {
   try {
      yield call(
        fetch, 
        `http://localhost:4000/movies/${action.payload.id}`,
        {
          method: 'delete'
        }
      );
      yield put(getMovies());
      yield put(push('/movie'));
   } catch (e) {
      yield put({type: types.REQUEST_MOVIE_FAIL, message: e.message});
   }
}

export default function* () {
  yield takeEvery(types.REQUEST_MOVIES, fetchMovies);
  yield takeEvery(types.REQUEST_MOVIE, fetchMovie);
  yield takeEvery(types.UPDATE_MOVIE, updateMovie);
  yield takeEvery(types.DELETE_MOVIE, deleteMovie);
}
