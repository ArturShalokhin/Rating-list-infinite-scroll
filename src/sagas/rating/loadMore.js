import {loadDataRating} from './loadDataRating'

export function* handleLoadMore () {
  yield loadDataRating()
}
