import { all, fork } from 'redux-saga/effects';

import { watchRating } from './rating';

export default function* () {
  yield all([
    fork(watchRating)
  ]);
}
