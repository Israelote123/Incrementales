import{takeLatest,put} from  "redux-saga/effects"
import { requestApi } from "../../api/api"
import {updateStatus} from '../../api/api'
import {REQUEST_CANCEL,REQUEST_CANCELED,REQUEST_CANCELED_ERROR,REQUEST_SEND,REQUEST_SENT,REQUEST_SENT_ERROR} from '../actions/const'


function* requestWatcher(){
    yield takeLatest(REQUEST_SEND,requestWorker)
}



function* requestWorker(action){
    try{
      let payload =yield requestApi(action.payload)
       yield put ({type:REQUEST_SENT, payload})
    }
    catch(error){
         yield put({ type:REQUEST_SENT_ERROR})
    }
}

function* requestCancelWatcher(){
    yield takeLatest(REQUEST_CANCEL,requestCancelWorker)
}


function* requestCancelWorker(action){
    try{
      let payload =yield updateStatus(action.payload)
       yield put ({type:REQUEST_CANCELED, payload:payload})
    }
    catch(error){
         yield put({ type:REQUEST_CANCELED_ERROR})
    }
}








export {requestWatcher,requestCancelWatcher}