
import {getPublicationsAll } from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import {GET_ALL_PUBLICATIONS,GOT_ALL_PUBLICATIONS,GOT_ALL_PUBLICATIONS_ERROR} from '../actions/const'

export function* allPublicationsdWatcher(){
    yield takeLatest(GET_ALL_PUBLICATIONS,allPublicationsWorker)
}

function* allPublicationsWorker(action){
    try{      
      let payload =yield getPublicationsAll(action.payload)
      yield put ({type:GOT_ALL_PUBLICATIONS, payload:payload})
    }
    catch(error){
         yield put({ type:GOT_ALL_PUBLICATIONS_ERROR})
    }   
}