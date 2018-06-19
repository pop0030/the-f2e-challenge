import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './action';
import Admin from './Admin';

export default connect(
  state => ({
    state: state.admin
  }),
  dispatch => ({
    action: bindActionCreators(actions, dispatch)
  })
)(Admin);
