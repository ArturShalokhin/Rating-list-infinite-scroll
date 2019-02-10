import { loadDataRating } from './loadDataRating';

export function* handleSearch () {
  yield loadDataRating();
}
