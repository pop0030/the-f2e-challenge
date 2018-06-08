import { handleActions } from 'redux-actions';

import {
  TOGGLE_TAB
} from './constant';

const defaultStatus = {
  list: [],
  actionResult: null,
  tab: 'task', // task, progress, completed
  isOpenAdd: false,
  isOpenEdit: false,
  activeItem: null,
  timestamp: Date.now()
};

export default handleActions(
  {
    [TOGGLE_TAB]: (state, action) =>({
      actionResult: action.type,
      tab: action.payload.tab
    })
  },
  defaultStatus
);
