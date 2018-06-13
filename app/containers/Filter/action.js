import { createAction } from 'redux-actions';
import { FETCH_DATA_REQUEST } from './constant';

export const fetchData = createAction(FETCH_DATA_REQUEST, payload => payload);
