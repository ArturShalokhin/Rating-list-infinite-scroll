import { ActionTypes } from './action';
import { TAB_TYPES } from '../../../sagas/rating/constants';

export const initialState = {
  isLoading: false,
  isDownloaded: false,
  isHasMore: true,
  search: '',
  currentTab: TAB_TYPES.ALL,
  list: [],
  player: {}
};

export default function (state = initialState, action) {
  switch (action.type) {

    case ActionTypes.REQUESTED_RATING:
      return { ...state, isLoading: true, isDownloaded: false };

    case ActionTypes.REQUESTED_RATING_FAILED:
      return { ...state, isLoading: false, isDownloaded: false };

    case ActionTypes.REQUESTED_RATING_SUCCEEDED:
      return { ...state, isLoading: false, isDownloaded: true, list: [ ...state.list, ...action.payload.list ]};

    case ActionTypes.CHANGE_TAB:
      return { ...state, currentTab: action.payload.type, isHasMore: true, list: [] };

    case ActionTypes.SET_HAS_MORE:
      return { ...state, isHasMore: action.payload.isHasMore };

    case ActionTypes.SEARCH:
      return { ...state, search: action.payload.search, list: [], isHasMore: true };

    case ActionTypes.SET_PLAYER:
      return { ...state, player: action.payload.player };

    default:
      return state;
  }
}
