import {feedbackGet} from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import  { GET_FEEDBACK,GOT_FEEDBACK,GOT_FEEDBACK_ERROR} from '../actions/const'

export function* feedbackGetWatcher(){
    yield takeLatest(GET_FEEDBACK,feedbackGetWorker)
}

function* feedbackGetWorker(action){
    try{      
      let payload =yield feedbackGet(action.payload)
     console.log(payload)
      yield put ({type:GOT_FEEDBACK, payload:payload})
    }
    catch(error){
         yield put({ type:GOT_FEEDBACK_ERROR})
    }   
}


