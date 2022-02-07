


import { GET_NOTIFICATIONS,GOT_NOTIFICATIONS, GOT_NOTIFICATIONS_ERROR}from '../actions/const'

const initialState={
    usuario:"",
    error:false,
    notifications:[],
    finish:false,
}  
  const showNotificationsReducer =  (state=initialState, action) => {
    switch (action.type) {
     
      case  GET_NOTIFICATIONS:
        return {...state,usuario:action.payload} ;

      case GOT_NOTIFICATIONS:
        return {...state,error:false,notifications:action.payload,finish:true}  ;

      case GOT_NOTIFICATIONS_ERROR:
        return {...state,error:true};  ;

      default:
        return state;
    }
  };
  
  export {showNotificationsReducer}