import {REQUEST_CANCEL,REQUEST_SEND,REQUEST_SENT,REQUEST_SENT_ERROR} from '../actions/const'
const initialState={
    send:false,
    loading:false,
    error:false,
}  


  const requestReducer =  (state=initialState, action) => {
    switch (action.type) {

      
      case REQUEST_SEND :
        return {...state,course:action.payload,loading:true} ;
      
      case REQUEST_CANCEL:
          return {...state,send:false};
    

      case REQUEST_SENT:
        return {...state,send:true,loading:false,error:false}  ;

      case REQUEST_SENT_ERROR:
        return {...state,loading:false,error:true};  
    
      default:
        return state;
    }
  };
  
  export {requestReducer}