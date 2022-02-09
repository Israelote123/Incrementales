import{takeLatest,put} from  "redux-saga/effects"
import { requestApi } from "../../api/api"
import {REQUEST_SEND,REQUEST_SENT,REQUEST_SENT_ERROR}from '../actions/const'
 
function* requestWorker(action){
    try{
      let payload =yield requestApi(action.payload)
       yield put ({type:REQUEST_SENT, payload})
    }
    catch(error){
         yield put({ type:REQUEST_SENT_ERROR})
    }
}

function* requestWatcher(){
    yield takeLatest(REQUEST_SEND,requestWorker)
}

export {requestWatcher}