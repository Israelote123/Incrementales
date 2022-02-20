
import {GET_USER_PUBLICATIONS,GOT_USER_PUBLICATIONS,GOT_USER_PUBLICATIONS_ERROR} from '../actions/const'

const initialState={
    usuario:"",
    error:false,
    publicationUser:[],
    finish:false,
}  
  const userPublicationReducer =  (state=initialState, action) => {
    switch (action.type) {
     
      case  GET_USER_PUBLICATIONS:
        return {...state,usuario:action.payload} ;

      case GOT_USER_PUBLICATIONS:
        return {...state,error:false,finish:true,publicationUser:action.payload};

      case GOT_USER_PUBLICATIONS_ERROR:
        return {...state,error:true};  ;

      default:
        return state;
    }
  };
  
  export {userPublicationReducer}