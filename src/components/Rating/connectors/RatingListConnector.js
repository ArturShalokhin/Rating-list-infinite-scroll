import { connect } from 'react-redux';

import { loadMore } from '../../../store/modules/rating/action';

const mapStateToProps = (state) => ({
  list: state.rating.list,
  isLoading: state.rating.isLoading,
  isDownloaded: state.rating.isDownloaded,
  isHasMore: state.rating.isHasMore
});

const mapDispatchToProps = {
  loadMore
};

export default (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);
