import { handleActions } from 'redux-actions';

import {
  ADD_ITEM,
  EDIT_ITEM,
  TOGGLE_TAB,
  TOGGLE_ADD,
  TOGGLE_EDIT,
  TOGGLE_COMPLETED,
  TOGGLE_REMARKABLE
} from './constant';

const defaultStatus = {
  list: [],
  actionResult: null,
  tab: 'task', // task, progress, completed
  isOpenAdd: false,
  activeItem: null,
  lastUpdated: Date.now()
};

export default handleActions(
  {
    [TOGGLE_TAB]: (state, action) => ({
      ...state,
      actionResult: action.type,
      tab: action.payload.tab
    }),
    [TOGGLE_ADD]: (state, action) => ({
      ...state,
      actionResult: action.type,
      isOpenAdd: action.payload.isOpen,
      activeItem: null
    }),
    [TOGGLE_EDIT]: (state, action) => ({
      ...state,
      actionResult: action.type,
      isOpenAdd: false,
      activeItem: action.payload.isOpen ? action.payload.uid : null
    }),
    [ADD_ITEM]: (state, action) => ({
      ...state,
      actionResult: action.type,
      isOpenAdd: false,
      list: state.list.concat([action.payload])
    }),
    [EDIT_ITEM]: (state, action) => ({
      ...state,
      actionResult: action.type,
      isOpenAdd: false,
      activeItem: null,
      list: state.list.map(item => {
        if (item.uid === action.payload.uid) {
          return { ...item, ...action.payload }
        }
        return item;
      })
    }),
    [TOGGLE_COMPLETED]: (state, action) => ({
      ...state,
      list: state.list.map(item => {
        if (item.uid === action.payload.uid) {
          return {
            ...item,
            isCompleted: action.payload.isCompleted
          }
        }
        return item;
      })
    }),
    [TOGGLE_REMARKABLE]: (state, action) => ({
      ...state,
      list: state.list.map(item => {
        if (item.uid === action.payload.uid) {
          return {
            ...item,
            isRemarkable: action.payload.isRemarkable
          }
        }
        return item;
      })
    })
  },
  defaultStatus
);
