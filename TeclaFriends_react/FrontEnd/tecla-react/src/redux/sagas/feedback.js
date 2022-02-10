import {pushfeedback} from '../../api/api'
import{takeLatest,put} from  "redux-saga/effects"
import { SAVE_FEEDBACK,SAVED_FEEDBACK,SAVED_FEEDBACK_ERROR} from '../actions/const'

export function* feedbackWatcher(){
    yield takeLatest(SAVE_FEEDBACK,feedbackWorker)
}

function* feedbackWorker(action){
    try{
      let payload =yield pushfeedback(action.payload)
      yield put ({type:SAVED_FEEDBACK, payload})
    }
    catch(error){
         yield put({ type:SAVED_FEEDBACK_ERROR})
    }   
}