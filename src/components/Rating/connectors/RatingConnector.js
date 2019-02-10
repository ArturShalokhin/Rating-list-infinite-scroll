import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  player: state.rating.player
});

export default (Component) => connect(mapStateToProps)(Component);
