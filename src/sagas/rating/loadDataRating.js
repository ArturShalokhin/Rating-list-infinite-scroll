import { put, call } from 'redux-saga/effects';

import store from '../../store'
import {
  requestRating,
  requestRatingFail,
  requestRatingSuccess,
  setHasMore,
  setPlayer
} from '../../store/modules/rating/action';
import {LIMIT_LOADED_PLAYERS} from './constants';
import RatingTransformer from '../../transformers/RatingTransformer';
import {getRatingRequestByType} from './utils';


export function* loadDataRating (isInitial = false) {
  try {
    yield put(requestRating());
    const { rating } = store.getState();
    const { currentTab, list, search } = rating;
    const offset = list.length;
    const { data } = yield call(getRatingRequestByType(currentTab), {
      limit: LIMIT_LOADED_PLAYERS,
      offset,
      search
    });
    if (isInitial) {
      yield put(setPlayer(RatingTransformer.fetch(data.me)));
    }
    const ratingList = data[currentTab.toLowerCase()];
    if (data.total === (offset + ratingList.length)) {
      yield put(setHasMore(false));
    }
    yield put(requestRatingSuccess(RatingTransformer.fetchCollection(ratingList)));
  } catch (e) {
    yield put(requestRatingFail());
  }
}
