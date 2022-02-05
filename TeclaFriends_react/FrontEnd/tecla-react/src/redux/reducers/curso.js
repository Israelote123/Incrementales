import{ SAVE_CUORSE,SAVED_CUORSE,SAVED_CUORSE_ERROR } from '../actions/const'
const initialState={
    loading:false,
    error:false,
}  


  const courseReducer =  (state=initialState, action) => {
    switch (action.type) {
      case SAVE_CUORSE :
        return {...state,course:action.payload,loading:true,} ;

      case SAVED_CUORSE :
        return {...state,loading:false,error:false}  ;

      case SAVED_CUORSE_ERROR:
        return {...state,loading:false,error:true};  ;
    

      default:
        return state;
    }
  };
  
  export {courseReducer}