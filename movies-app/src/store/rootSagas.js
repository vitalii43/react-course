import { fork } from 'redux-saga/effects';
import { moviesSaga } from './movies';

function* mySaga() {
  yield fork(moviesSaga);
}

export default mySaga;
