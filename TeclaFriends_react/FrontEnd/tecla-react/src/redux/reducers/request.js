import {REQUEST_CANCEL,REQUEST_CANCELED,REQUEST_CANCELED_ERROR,REQUEST_SEND,REQUEST_SENT,REQUEST_SENT_ERROR}from '../actions/const'
const initialState={
    send:false,
    loading:false,
    error_send:false,
    error_cancel:false,
}  


  const requestReducer =  (state=initialState, action) => {
    switch (action.type) {

      
      case REQUEST_SEND :
        return {...state,course:action.payload,loading:true} ;
      
      case REQUEST_CANCEL:
          return {...state,cancel:action.payload};

      case REQUEST_CANCELED:
          return {...state,cancel:action.payload,send:false,error_cancel:false};    

      case REQUEST_CANCELED_ERROR:
            return {...state,loading:false,error_cancel:true};  

      case REQUEST_SENT:
        return {...state,send:true,loading:false,error_send:false}  ;

      case REQUEST_SENT_ERROR:
        return {...state,loading:false,error_send:true};  
    
      default:
        return state;
    }
  };
  
  export {requestReducer}