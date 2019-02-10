import { connect } from 'react-redux';

import { search } from '../../../store/modules/rating/action';

const mapDispatchToProps = {
  search
};

export default (Component) => connect(null, mapDispatchToProps)(Component);
