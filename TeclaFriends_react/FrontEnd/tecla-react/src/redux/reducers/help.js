

import {SET_LOADING,SAVE_HELP,SAVED_HELP,SAVED_HELP_ERROR} from '../actions/const'

const initialState={
    loading:false,
    error:false,
}  

  const helpReducer =  (state=initialState, action) => {
    switch (action.type) {
      case SET_LOADING:
        return {...state,loading:true}
      case SAVE_HELP :
        return {...state,help:action.payload,loading:false,} ;

      case SAVED_HELP :
        return {...state,error:false}  ;

      case SAVED_HELP_ERROR:
        return {...state,error:true};  ;

      default:
        return state;
    }
  };
  
  export {helpReducer}