import { createAction } from 'redux-actions';
import {
  ADD_ITEM,
  EDIT_ITEM,
  TOGGLE_TAB,
  TOGGLE_ADD,
  TOGGLE_EDIT,
  TOGGLE_COMPLETED,
  TOGGLE_REMARKABLE
} from './constant';

export const addItem = createAction(ADD_ITEM, payload => payload);
export const editItem = createAction(EDIT_ITEM, payload => payload);
export const toggleTab = createAction(TOGGLE_TAB, tab => ({ tab }));
export const toggleAdd = createAction(TOGGLE_ADD, isOpen => ({ isOpen }));
export const toggleEdit = createAction(TOGGLE_EDIT, (uid, isOpen) => ({ uid, isOpen }));
export const toggleCompleted = createAction(TOGGLE_COMPLETED, (uid, isCompleted) => ({ uid, isCompleted }));
export const toggleRemarkable = createAction(TOGGLE_REMARKABLE, (uid, isRemarkable) => ({ uid,  isRemarkable }));
