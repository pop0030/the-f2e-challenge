import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import { TPE_LOCATION, CAT_OPTIONS } from 'app/containers/Filter/config';
import * as api from 'app/api';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CHANGE_LOCATION,
  CHANGE_CATEGORY
} from 'app/containers/Filter/constant';

const handleQuery = ({ location, category, search }) => {
  const loc = TPE_LOCATION.find(opt => opt.value === location);
  console.log(location, loc);
  const cat = category.map(value => CAT_OPTIONS.find(opt => value === opt.value).label);
  const isAllLocation = location === '000';
  return [isAllLocation ? '' : loc.label, ...cat, search].join(' ').trim();
};

function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
  yield takeLatest(CHANGE_LOCATION, fetchData);
  yield takeLatest(CHANGE_CATEGORY, fetchData);
}

function* fetchData(action) {
  try {
    const query = yield select(state => state.filter.query);
    const res = yield call(api.getTravelsInfo, {
      limit: 10,
      q: handleQuery(query)
    });
    if (res.data.success) {
      yield put({ type: FETCH_DATA_SUCCESS, payload: res.data.result });
    } else {
      yield put({ type: FETCH_DATA_FAILURE, error: res });
    }
  } catch(error) {
    yield put({ type: FETCH_DATA_FAILURE, error });
  }
}

export default function* rootSaga() {
  yield all([
    watchFetchData()
  ])
}
