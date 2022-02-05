import {all} from 'redux-saga/effects'
import {courseWatcher} from './course'
import {requestWatcher} from './request'

function* rootSaga(){
    yield all([
        courseWatcher(),
        requestWatcher(),
    ])
}

export {rootSaga}