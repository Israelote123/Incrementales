import {SET_LOADING,SAVE_ABILITY,SAVED_ABILITY,SAVED_ABILITY_ERROR}from '../actions/const'

const initialState={
    loading:false,
    error:false,
}  


  const abilitiReducer =  (state=initialState, action) => {
    switch (action.type) {
      case SET_LOADING:
        return {...state,loading:true}
        
      case SAVE_ABILITY :
        return {...state,ability:action.payload,loading:false,} ;

      case SAVED_ABILITY :
        return {...state,error:false}  ;

      case SAVED_ABILITY_ERROR:
        return {...state,error:true};  ;
    

      default:
        return state;
    }
  };
  
  export {abilitiReducer}