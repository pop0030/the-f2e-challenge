import { handleActions } from 'redux-actions';
import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from './constant';

const defaultState = {
  data: null,
  error: null,
  actionResult: null
};

export default handleActions({
  [FETCH_DATA_SUCCESS]: (state, action) => ({
    ...state,
    data: action.payload,
    actionResult: action.type
  }),
  [FETCH_DATA_FAILURE]: (state, action) => ({
    ...state,
    error: action.error,
    actionResult: action.type
  })
}, defaultState);
