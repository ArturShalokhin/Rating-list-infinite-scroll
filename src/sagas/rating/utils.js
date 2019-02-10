import {TAB_TYPES} from './constants';
import RatingProxy from '../../proxies/RatingProxy';

export const getRatingRequestByType = (type) => {
  const instance = new RatingProxy();
  switch (type) {
    case TAB_TYPES.ALL:
      return instance.getAll;
    case TAB_TYPES.FRIENDS:
      return instance.getFriends;
    case TAB_TYPES.TEAM:
      return instance.getTeams;
    default:
      throw new Error('[getRatingRequestByType] wrong type')
  }
};
