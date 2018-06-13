import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as api from 'app/api';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from 'app/containers/Filter/constant';

function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}

function* fetchData(action) {
  try {
    const res = yield call(api.getTravelsInfo, action.payload);
    yield put({ type: FETCH_DATA_SUCCESS, payload: res.data });
  } catch(error) {
    yield put({ type: FETCH_DATA_FAILURE, error });
  }
}

export default function* rootSaga() {
  yield all([
    watchFetchData()
  ])
}
