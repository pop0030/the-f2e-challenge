import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './action';
import Todolist from './Todolist';

export default connect(
  state => ({
    state: state.todolist
  }),
  dispatch => ({
    action: bindActionCreators(actions, dispatch)
  })
)(Todolist);
