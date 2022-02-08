import { all } from "redux-saga/effects";
import { loginWatcher } from "./login";
import {courseWatcher} from './course'
import {requestWatcher} from './request'
import {searchWatcher} from './search'
import { abilitiWatcher } from "./abiliti";
import {helpWatcher} from './help'
import {showCourseWatcher} from './showCourses'
import {showAbilitiWatcher} from './showAbiliti'
import {showNotificationsWatcher} from './notifications'
import { possibleFriendWatcher} from './possibleFriend'
import {friendWatcher} from './showFriends'
import {discoverFriendWatcher} from './discoverFriends'


function* rootSaga() {
    yield all([
        loginWatcher(),
        courseWatcher(),
        requestWatcher(),
        searchWatcher(),
        abilitiWatcher(),
        helpWatcher(),
        showCourseWatcher(),
        showAbilitiWatcher(),
        showNotificationsWatcher(),
        possibleFriendWatcher(),
        friendWatcher(),
        discoverFriendWatcher(),
    ])
}

export {rootSaga}