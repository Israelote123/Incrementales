import { SAVE_FEEDBACK,SAVED_FEEDBACK,SAVED_FEEDBACK_ERROR} from '../actions/const'

const initialState={
    feedbackData:[],
    error:false,
}  


  const feedbackReducer =  (state=initialState, action) => {
    switch (action.type) {

        
      case SAVE_FEEDBACK:
        return {...state,feedbackData:action.payload} ;

      case SAVED_FEEDBACK :
        return {...state,error:false}  ;

      case SAVED_FEEDBACK_ERROR:
        return {...state,error:true};  ;

      default:
        return state;
    }
  };
  
  export {feedbackReducer}