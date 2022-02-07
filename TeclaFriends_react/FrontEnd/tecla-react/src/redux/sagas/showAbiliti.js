import {getAbility } from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import  { GET_ABILITI,GOT_ABILITI,GOT_ABILITI_ERROR}from '../actions/const'
export function* showAbilitiWatcher(){
    yield takeLatest(GET_ABILITI,showAbilitiWorker)
}

function* showAbilitiWorker(action){
    try{
      
      let payload =yield getAbility(action.payload)

      yield put ({type:GOT_ABILITI, payload:payload})
    }
    catch(error){
         yield put({ type:GOT_ABILITI_ERROR})
    }   
}


