import {loadDataRating} from './loadDataRating';

export function* handleInitial () {
  yield loadDataRating(true);
}
