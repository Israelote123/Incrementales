import { all } from "redux-saga/effects";
import { loginWatcher } from "./login";
import {courseWatcher} from './course'
import {requestWatcher} from './request'
import {searchWatcher} from './search'


function* rootSaga() {
    yield all([
        loginWatcher(),
        courseWatcher(),
        requestWatcher(),
        searchWatcher(),
    ])
}

export {rootSaga}