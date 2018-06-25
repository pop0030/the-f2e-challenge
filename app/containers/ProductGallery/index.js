// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as actions from './action';
import ProductGallery from './ProductGallery';

export default connect(
  state => ({
    state: state.productGallery
  }),
  dispatch => ({
    // action: bindActionCreators(actions, dispatch)
  })
)(ProductGallery);
