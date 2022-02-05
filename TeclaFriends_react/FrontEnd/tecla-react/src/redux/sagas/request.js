import{takeLatest,put} from  "redux-saga/effects"
import axios from "axios"
import {REQUEST_SEND,REQUEST_SENT,REQUEST_SENT_ERROR}from '../actions/const'

export function* requestWatcher(){
    yield takeLatest(REQUEST_SEND,requestWorker)
}


function* requestWorker(action){
    try{
      let payload =yield axios({
        method:"post", 
        url: "http://localhost:3001/request/",
        data:action.payload
    });

       yield put ({type:REQUEST_SENT, payload})
    }
    catch(error){
         yield put({ type:REQUEST_SENT_ERROR})
    }

    
}