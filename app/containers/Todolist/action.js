import { createAction } from 'redux-actions';
import {
  TOGGLE_TAB
} from './constant';

export const toggleTab = createAction(TOGGLE_TAB, tab => ({ tab }));
