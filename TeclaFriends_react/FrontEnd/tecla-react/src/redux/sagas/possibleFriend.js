import {getPossibleFriend } from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import  { GET_POSIBBLE_FRIENDS,GOT_POSIBBLE_FRIENDS,GOT_POSIBBLE_FRIENDS_ERROR} from '../actions/const'

export function* possibleFriendWatcher(){
    yield takeLatest(GET_POSIBBLE_FRIENDS,possibleFriendWorker)
}

function* possibleFriendWorker(action){
    try{      
      let payload =yield getPossibleFriend (action.payload)
      yield put ({type:GOT_POSIBBLE_FRIENDS, payload:payload})
    }
    catch(error){
         yield put({ type:GOT_POSIBBLE_FRIENDS_ERROR})
    }   
}
