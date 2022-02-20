
import {getPublicationsUser } from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import {GET_USER_PUBLICATIONS,GOT_USER_PUBLICATIONS,GOT_USER_PUBLICATIONS_ERROR} from '../actions/const'

export function* userPublicationsdWatcher(){
    yield takeLatest(GET_USER_PUBLICATIONS,userPublicationsWorker)
}

function* userPublicationsWorker(action){
    try{      
      let payload =yield getPublicationsUser(action.payload)
      yield put ({type:GOT_USER_PUBLICATIONS, payload:payload})
    }
    catch(error){
         yield put({ type:GOT_USER_PUBLICATIONS_ERROR})
    }   
}