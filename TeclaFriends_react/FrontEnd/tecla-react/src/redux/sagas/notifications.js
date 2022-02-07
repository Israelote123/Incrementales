import {getNotifications } from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import  { GET_NOTIFICATIONS,GOT_NOTIFICATIONS, GOT_NOTIFICATIONS_ERROR} from '../actions/const'

export function* showNotificationsWatcher(){
    yield takeLatest(GET_NOTIFICATIONS,showNotificationsWorker)
}

function* showNotificationsWorker(action){
    try{      
      let payload =yield getNotifications (action.payload)
      yield put ({type:GOT_NOTIFICATIONS, payload:payload})
    }
    catch(error){
         yield put({ type:GOT_NOTIFICATIONS_ERROR})
    }   
}
