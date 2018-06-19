import { combineReducers } from 'redux';
import todolist from 'app/containers/Todolist/reducer';
import filter from 'app/containers/Filter/reducer';
import admin from 'app/containers/AdminOrder/reducer';

const root = null;

export default combineReducers({
  root,
  todolist,
  filter,
  admin
})
