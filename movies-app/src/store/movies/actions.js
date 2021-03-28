import * as types from './constants';

export const getMovies = () => ({
  type: types.REQUEST_MOVIES
});

export const getMovie = (id) => ({
  type: types.REQUEST_MOVIE,
  payload: {id}
});

export const updateMovie = (id, data) => ({
  type: types.UPDATE_MOVIE,
  payload: {
    id,
    data
  }
});

export const createMovie = (data) => ({
  type: types.CREATE_MOVIE,
  payload: data
})

export const deleteMovie = (id) => ({
  type: types.DELETE_MOVIE,
  payload: {id}
})
