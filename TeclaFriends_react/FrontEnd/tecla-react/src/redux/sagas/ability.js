import {pushAbiliti } from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import {SAVE_ABILITY,SAVED_ABILITY,SAVED_ABILITY_ERROR} from '../actions/const'

export function* abilitiWatcher(){

    yield takeLatest(SAVE_ABILITY,abilitiWorker)
}

function* abilitiWorker(action){
    try{
      let payload =yield pushAbiliti (action.payload)
      yield put ({type:SAVED_ABILITY, payload})
    }
    catch(error){
         yield put({ type:SAVED_ABILITY_ERROR})
    }   
}