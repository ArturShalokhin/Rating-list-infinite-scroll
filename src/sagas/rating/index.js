import { takeEvery } from 'redux-saga/effects'

import { ActionTypes } from '../../store/modules/rating/action';
import { handleInitial } from './initial';
import { handleLoadMore } from './loadMore';
import { handleChangeTab } from './changeTab';
import { handleSearch } from './search';

export function* watchRating () {
  yield takeEvery(ActionTypes.INITIAL_RATING, handleInitial);
  yield takeEvery(ActionTypes.LOAD_MORE, handleLoadMore);
  yield takeEvery(ActionTypes.CHANGE_TAB, handleChangeTab);
  yield takeEvery(ActionTypes.SEARCH, handleSearch);
}
