import{takeLatest,put} from  "redux-saga/effects"
import axios from "axios"
import {SAVED_CUORSE, SAVE_CUORSE,SAVED_CUORSE_ERROR} from '../actions/const'

export function* courseWatcher(){
    yield takeLatest(SAVE_CUORSE,courseWorker)
}


function* courseWorker(action){
    try{
      let payload =yield axios({
        method:"post", 
        url: "http://localhost:3001/cursos/",
        data:action.payload
    });

       yield put ({type:SAVED_CUORSE, payload})
    }
    catch(error){
         yield put({ type:SAVED_CUORSE_ERROR})
    }

    
}