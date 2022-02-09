import {getAbility } from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import  { GET_ABILITY,GOT_ABILITY,GOT_ABILITY_ERROR}from '../actions/const'
export function* showAbilitiWatcher(){
    yield takeLatest(GET_ABILITY,showAbilitiWorker)
}

function* showAbilitiWorker(action){
    try{
      
      let payload =yield getAbility(action.payload)

      yield put ({type:GOT_ABILITY, payload:payload})
    }
    catch(error){
         yield put({ type:GOT_ABILITY_ERROR})
    }   
}


