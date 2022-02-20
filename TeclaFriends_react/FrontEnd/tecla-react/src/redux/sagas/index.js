import { all } from "redux-saga/effects";
import { loginWatcher } from "./login";
import {courseWatcher} from './course'
import {requestWatcher} from './request'
import {requestCancelWatcher} from './request'
import {searchWatcher} from './search'
import { abilitiWatcher } from "./ability";
import {helpWatcher} from './help'
import {showCourseWatcher} from './showCourses'
import {showAbilitiWatcher} from './showAbility'
import {showNotificationsWatcher} from './notifications'
import { possibleFriendWatcher} from './possibleFriend'
import {friendWatcher} from './showFriends'
import {discoverFriendWatcher} from './discoverFriends'
import {updateStatusWatcher}  from './status'
import {feedbackWatcher} from './feedback'
import {feedbackGetWatcher} from './getFeedback'
import {userPublicationsdWatcher} from './userPublications'
import {allPublicationsdWatcher} from './allPublications'


function* rootSaga() {
    yield all([
        loginWatcher(),
        courseWatcher(),
        requestWatcher(),
        requestCancelWatcher(),
        searchWatcher(),
        abilitiWatcher(),
        helpWatcher(),
        showCourseWatcher(),
        showAbilitiWatcher(),
        showNotificationsWatcher(),
        possibleFriendWatcher(),
        friendWatcher(),
        discoverFriendWatcher(),
        updateStatusWatcher(),
        feedbackWatcher(),
        feedbackGetWatcher(),
        userPublicationsdWatcher(),
        allPublicationsdWatcher(),
    ])
}

export {rootSaga}