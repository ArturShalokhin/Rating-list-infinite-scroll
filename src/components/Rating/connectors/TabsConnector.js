import { connect } from 'react-redux';

import { changeTab } from '../../../store/modules/rating/action';

const mapStateToProps = (state) => ({
  currentTab: state.rating.currentTab
});

const mapDispatchToProps = {
  changeTab
};

export default (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);
