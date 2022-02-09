import { GET_ABILITY,GOT_ABILITY,GOT_ABILITY_ERROR}from '../actions/const'

const initialState={
    usuario:"",
    error:false,
    ability:{},
    finish:false,
}  


  const showAbilitieReducer =  (state=initialState, action) => {
    switch (action.type) {
     
      case  GET_ABILITY:
        return {...state,usuario:action.payload} ;

      case GOT_ABILITY:
        return {...state,error:false,ability:action.payload,finish:true}  ;

      case GOT_ABILITY_ERROR:
        return {...state,error:true};  ;

      default:
        return state;
    }
  };
  
  export {showAbilitieReducer}