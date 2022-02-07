import { GET_ABILITI,GOT_ABILITI,GOT_ABILITI_ERROR}from '../actions/const'

const initialState={
    usuario:"",
    error:false,
    abiliti:{},
    finish:false,
}  


  const showAbilitieReducer =  (state=initialState, action) => {
    switch (action.type) {
     
      case  GET_ABILITI:
        return {...state,usuario:action.payload} ;

      case GOT_ABILITI:
        return {...state,error:false,abiliti:action.payload,finish:true}  ;

      case GOT_ABILITI_ERROR:
        return {...state,error:true};  ;

      default:
        return state;
    }
  };
  
  export {showAbilitieReducer}