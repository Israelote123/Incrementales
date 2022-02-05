import { all } from "redux-saga/effects";
import { loginWatcher } from "./login";
import {courseWatcher} from './course'
import {requestWatcher} from './request'


function* rootSaga() {
    yield all([
        loginWatcher(),
        courseWatcher(),
        requestWatcher(),

    ])
}

export {rootSaga}