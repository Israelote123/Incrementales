import {getFriends  } from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import {GET_FRIENDS,GOT_FRIENDS,GOT_FRIENDS_ERROR}from '../actions/const'

export function* friendWatcher(){
    yield takeLatest(GET_FRIENDS,friendWorker)
}

function* friendWorker(action){
    try{      
      let payload =yield getFriends (action.payload)
      yield put ({type:GOT_FRIENDS, payload:payload})
    }
    catch(error){
         yield put({ type:GOT_FRIENDS_ERROR})
    }   
}
