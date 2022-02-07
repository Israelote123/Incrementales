import {SET_LOADING,SAVE_ABILITI,SAVED_ABILITI,SAVED_ABILITI_ERROR}from '../actions/const'

const initialState={
    loading:false,
    error:false,
}  


  const abilitiReducer =  (state=initialState, action) => {
    switch (action.type) {
      case SET_LOADING:
        return {...state,loading:true}
        
      case SAVE_ABILITI :
        return {...state,abiliti:action.payload,loading:false,} ;

      case SAVED_ABILITI :
        return {...state,error:false}  ;

      case SAVED_ABILITI_ERROR:
        return {...state,error:true};  ;
    

      default:
        return state;
    }
  };
  
  export {abilitiReducer}