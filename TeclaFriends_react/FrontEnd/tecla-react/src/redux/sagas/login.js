import { takeLatest, put } from "redux-saga/effects";
import {USER_LOGIN, USER_LOGIN_SUCCEED, USER_LOGIN_ERROR} from "../actions/const";
import { inicioSesion } from '../../api/api';

function* loginWorker(action) {
  try {
    let payload = yield inicioSesion(action.payload);
    yield put({ type: USER_LOGIN_SUCCEED, payload: payload });
  } catch (error) {
    yield put({ type: USER_LOGIN_ERROR });
  }
}


function* loginWatcher() {
  yield takeLatest(USER_LOGIN, loginWorker);
}

export { loginWatcher };