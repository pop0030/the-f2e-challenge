import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './action';
import Filter from './Filter';

export default connect(
  state => ({
    state: state.filter
  }),
  dispatch => ({
    action: bindActionCreators(actions, dispatch)
  })
)(Filter);
