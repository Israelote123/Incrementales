import {GET_ALL_PUBLICATIONS,GOT_ALL_PUBLICATIONS,GOT_ALL_PUBLICATIONS_ERROR} from '../actions/const'

const initialState={
    usuario:"",
    error:false,
    publicationAll:[],
    finish:false,
}  
  const allPublicationReducer =  (state=initialState, action) => {
    switch (action.type) {
     
      case  GET_ALL_PUBLICATIONS:
        return {...state,usuario:action.payload} ;

      case GOT_ALL_PUBLICATIONS:
        return {...state,error:false,finish:true,publicationAll:action.payload};

      case GOT_ALL_PUBLICATIONS_ERROR:
        return {...state,error:true};  ;

      default:
        return state;
    }
  };
  
  export {allPublicationReducer}