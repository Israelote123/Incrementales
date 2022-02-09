import { takeLatest, put } from "redux-saga/effects";
import {USER_LOGIN, USER_LOGIN_SUCCEED, USER_LOGIN_ERROR, USER_LOGIN_CHECK, USER_LOGIN_CHECKED} from "../actions/const";
import { inicioSesion, loginCheck } from '../../api/api';

function* loginWorker(action) {
  try {
    let payload = yield inicioSesion(action.payload);
    yield put({ type: USER_LOGIN_SUCCEED, payload: payload });
  } catch (error) {
    yield put({ type: USER_LOGIN_ERROR });
  }
}

function* loginCheckWorker(action) {
  try {
    let payload = yield loginCheck(action.payload);
    if(payload.login){
      yield put({ type: USER_LOGIN_CHECKED, payload: payload.login });
    } else {
      yield put({ type: USER_LOGIN_CHECKED, payload: false });
    }
  } catch (error) {
    yield put({ type: USER_LOGIN_CHECKED, payload: false });
  }
}

function* loginWatcher() {
  yield takeLatest(USER_LOGIN_CHECK, loginCheckWorker)
  yield takeLatest(USER_LOGIN, loginWorker);
}

export { loginWatcher };