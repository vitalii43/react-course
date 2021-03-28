import * as types from './constants';

const initialState = {
  list: [],
  movie: null
};

export function movies(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_MOVIES_SUCCESS: 
      return {
        ...state,
        list: action.movies.data
      }
    case types.REQUEST_MOVIE_SUCCESS: 
      return {
        ...state,
        movie: action.payload
      }
    default: 
      return state
  }
}
