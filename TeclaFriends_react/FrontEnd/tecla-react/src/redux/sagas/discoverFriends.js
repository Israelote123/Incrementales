import {discoverFriend  } from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import { DISCOVER_FRIENDS ,DISCOVERED_FRIENDS, DISCOVER_FRIENDS_ERROR}from '../actions/const'

export function* discoverFriendWatcher(){
    yield takeLatest(DISCOVER_FRIENDS,discoverFriendWorker)
}

function* discoverFriendWorker(action){
    try{      
      let payload =yield discoverFriend  (action.payload)
      yield put ({type:DISCOVERED_FRIENDS, payload:payload})
    }
    catch(error){
         yield put({ type:DISCOVER_FRIENDS_ERROR})
    }   
}
