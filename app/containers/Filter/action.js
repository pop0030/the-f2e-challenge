import { createAction } from 'redux-actions';
import {
  FETCH_DATA_REQUEST,
  CHANGE_LOCATION,
  CHANGE_CATEGORY
} from './constant';

export const fetchData = createAction(FETCH_DATA_REQUEST, payload => payload);
export const changeLocation = createAction(CHANGE_LOCATION, payload => payload);
export const changeCategory = createAction(CHANGE_CATEGORY, payload => payload);
