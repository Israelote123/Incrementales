import { all } from "redux-saga/effects";
import { loginWatcher } from "./login";
import {courseWatcher} from './course'
import {requestWatcher} from './request'
import { abilitiWatcher } from "./abiliti";
import {helpWatcher} from './help'
import {showCourseWatcher} from './showCourses'
import {showAbilitiWatcher} from './showAbiliti'
import {showNotificationsWatcher} from './notifications'
import { possibleFriendWatcher} from './possibleFriend'
import {friendWatcher} from './showFriends'


function* rootSaga() {
    yield all([
        loginWatcher(),
        courseWatcher(),
        requestWatcher(),
        abilitiWatcher(),
        helpWatcher(),
        showCourseWatcher(),
        showAbilitiWatcher(),
        showNotificationsWatcher(),
        possibleFriendWatcher(),
        friendWatcher(),
    ])
}

export {rootSaga}