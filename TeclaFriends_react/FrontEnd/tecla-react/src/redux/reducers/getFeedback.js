import  { GET_FEEDBACK,GOT_FEEDBACK,GOT_FEEDBACK_ERROR} from '../actions/const'

const initialState={
    usuario:"",
    error:false,
    feedbackData:[],
    finish:false,
}  
  const feedbackGetReducer =  (state=initialState, action) => {
    switch (action.type) {
     
      case  GET_FEEDBACK:
        return {...state,usuario:action.payload} ;

      case GOT_FEEDBACK:
        return {...state,error:false,feedbackData:action.payload,finish:true}  ;

      case GOT_FEEDBACK_ERROR:
        return {...state,error:true};  ;

      default:
        return state;
    }
  };
  
  export {feedbackGetReducer}