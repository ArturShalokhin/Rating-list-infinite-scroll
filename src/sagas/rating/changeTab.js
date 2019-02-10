import {loadDataRating} from './loadDataRating';

export function* handleChangeTab () {
  yield loadDataRating();
}
