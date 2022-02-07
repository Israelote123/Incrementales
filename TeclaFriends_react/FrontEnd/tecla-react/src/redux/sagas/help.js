import {pushHelp  } from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import  {SAVE_HELP,SAVED_HELP,SAVED_HELP_ERROR}from '../actions/const'

export function* helpWatcher(){

    yield takeLatest(SAVE_HELP,helpWorker)
}

function* helpWorker(action){
    try{
      let payload =yield pushHelp(action.payload)
      yield put ({type:SAVED_HELP, payload})
    }
    catch(error){
         yield put({ type:SAVED_HELP_ERROR})
    }   
}