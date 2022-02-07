import {pushAbiliti } from '../../api/api'
import {takeLatest,put} from  "redux-saga/effects"
import {SAVE_ABILITI,SAVED_ABILITI,SAVED_ABILITI_ERROR} from '../actions/const'

export function* abilitiWatcher(){

    yield takeLatest(SAVE_ABILITI,abilitiWorker)
}

function* abilitiWorker(action){
    try{
      let payload =yield pushAbiliti (action.payload)
      yield put ({type:SAVED_ABILITI, payload})
    }
    catch(error){
         yield put({ type:SAVED_ABILITI_ERROR})
    }   
}