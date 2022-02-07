
import { GET_FRIENDS,GOT_FRIENDS,GOT_FRIENDS_ERROR}from '../actions/const'

const initialState={
    usuario:"",
    error:false,
    friend:[],
    finish:false,
}  
  const friendReducer =  (state=initialState, action) => {
    switch (action.type) {
     
      case  GET_FRIENDS:
        return {...state,usuario:action.payload} ;

      case GOT_FRIENDS:
        return {...state,error:false,friend:action.payload,finish:true}  ;

      case GOT_FRIENDS_ERROR:
        return {...state,error:true};  ;

      default:
        return state;
    }
  };
  
  export {friendReducer}