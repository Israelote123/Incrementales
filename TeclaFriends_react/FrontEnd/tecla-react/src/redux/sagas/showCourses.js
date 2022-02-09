import {getCuorse } from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import  { GET_COURSE,GOT_COURSE,GOT_COURSE_ERROR} from '../actions/const'

export function* showCourseWatcher(){
    yield takeLatest(GET_COURSE,showCourseWorker)
}

function* showCourseWorker(action){
    try{
      
      let payload =yield getCuorse (action.payload)
      console.log("curso obtenido")
      yield put ({type:GOT_COURSE, payload:payload})
    }
    catch(error){
         yield put({ type:GOT_COURSE_ERROR})
    }   
}


