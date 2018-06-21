import { handleActions } from 'redux-actions';
import {
  TOGGLE_TAB
} from './constant';

const defaultState = {
  actionResult: null,
  tab: 'home', // home, orders, product,
  data: {
    revenue: {
      total: 54540,
      records: []
    },
    cost: {
      total: 12660,
      records: []
    },
    income: {
      total: 41880,
      records: []
    }
  },
  lastUpdated: Date.now()
};

export default handleActions({
  [TOGGLE_TAB]: (state, action) => ({
    ...state,
    tab: action.payload.tab,
    actionResult: action.type,
  })
}, defaultState);
