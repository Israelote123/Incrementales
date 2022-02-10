

import {updateStatus} from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import  { UPDATE_STATUS ,UPDATED_STATUS, UPDATED_STATUS_ERROR} from '../actions/const'

export function* updateStatusWatcher(){
    yield takeLatest(UPDATE_STATUS,updateStatusWorker)
}

function* updateStatusWorker(action){
    try{      
      let payload =yield updateStatus (action.payload)
      yield put ({type:UPDATED_STATUS, payload:payload})
    }
    catch(error){
         yield put({ type:UPDATED_STATUS_ERROR})
    }   
}


