import {pushCourse} from '../../api/api'
import{takeLatest,put} from  "redux-saga/effects"
import {SAVED_CUORSE, SAVE_CUORSE,SAVED_CUORSE_ERROR} from '../actions/const'

export function* courseWatcher(){
    yield takeLatest(SAVE_CUORSE,courseWorker)
}

function* courseWorker(action){
    try{
      let payload =yield pushCourse(action.payload)
      yield put ({type:SAVED_CUORSE, payload})
    }
    catch(error){
         yield put({ type:SAVED_CUORSE_ERROR})
    }   
}