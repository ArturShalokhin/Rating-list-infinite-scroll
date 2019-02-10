export const ActionTypes = {
  INITIAL_RATING: '[rating] INITIAL_RATING',
  REQUESTED_RATING_SUCCEEDED: '[rating] REQUESTED_RATING_SUCCEEDED',
  REQUESTED_RATING_FAILED: '[rating] REQUESTED_RATING_FAILED',
  REQUESTED_RATING: '[rating] REQUESTED_RATING',
  CHANGE_TAB: '[rating] CHANGE_TAB',
  LOAD_MORE: '[rating] LOAD_MORE',
  SET_HAS_MORE: '[rating] SET_HAS_MORE',
  SEARCH: '[rating] SEARCH',
  SET_PLAYER: '[rating] SET_PLAYER'
};

export const initialRating = () => ({
  type: ActionTypes.INITIAL_RATING
});

export const requestRating = () => ({
  type: ActionTypes.REQUESTED_RATING
});

export const requestRatingFail = () => ({
  type: ActionTypes.REQUESTED_RATING_FAILED
});

export const requestRatingSuccess = (list = []) => ({
  type: ActionTypes.REQUESTED_RATING_SUCCEEDED,
  payload: { list }
});

export const changeTab = (type) => ({
  type: ActionTypes.CHANGE_TAB,
  payload: { type }
});

export const loadMore = () => ({
  type: ActionTypes.LOAD_MORE
});

export const setHasMore = (isHasMore) => ({
  type: ActionTypes.SET_HAS_MORE,
  payload: { isHasMore }
});

export const search = (search) => ({
  type: ActionTypes.SEARCH,
  payload: { search }
});

export const setPlayer = (player) => ({
  type: ActionTypes.SET_PLAYER,
  payload: { player }
});
