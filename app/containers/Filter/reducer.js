import { handleActions } from 'redux-actions';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CHANGE_LOCATION,
  CHANGE_CATEGORY
} from './constant';

const defaultState = {
  isFetch: false,
  data: null,
  error: null,
  actionResult: null,
  query: {
    location: '000',
    category: [],
    search: ''
  }
};

export default handleActions({
  [FETCH_DATA_REQUEST]: (state, action) => ({
    ...state,
    data: null,
    isFetch: true,
    actionResult: action.type
  }),
  [FETCH_DATA_SUCCESS]: (state, action) => ({
    ...state,
    data: action.payload,
    isFetch: false,
    actionResult: action.type
  }),
  [FETCH_DATA_FAILURE]: (state, action) => ({
    ...state,
    error: action.error,
    isFetch: false,
    actionResult: action.type
  }),
  [CHANGE_LOCATION]: (state, action) => ({
    ...state,
    isFetch: true,
    actionResult: action.type,
    query: {
      ...state.query,
      location: action.payload.value
    }
  }),
  [CHANGE_CATEGORY]: (state, action) => ({
    ...state,
    isFetch: true,
    actionResult: action.type,
    query: {
      ...state.query,
      category: !action.payload.checked
        ? state.query.category.concat([action.payload.value])
        : state.query.category.filter(value => value !== action.payload.value)
    }
  })
}, defaultState);
