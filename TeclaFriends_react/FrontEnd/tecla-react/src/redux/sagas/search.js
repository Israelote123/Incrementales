import { takeLatest, put } from "redux-saga/effects";
import {SEARCH_USER, SEARCHING_USER, SEARCH_USER_ERROR} from "../actions/const";
import {getSearch} from '../../api/api'

function* searchWorker(action) {
  try {
    let payload = yield getSearch(action.payload);
    yield put({ type: SEARCHING_USER, payload: payload });
  } catch (error) {
    yield put({ type: SEARCH_USER_ERROR });
  }
}

function* searchWatcher() {
  yield takeLatest(SEARCH_USER, searchWorker);
}

export { searchWatcher };