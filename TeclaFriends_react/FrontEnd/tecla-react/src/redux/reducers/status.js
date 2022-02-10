
import{ UPDATE_STATUS ,UPDATED_STATUS, UPDATED_STATUS_ERROR} from '../actions/const'

const initialState={
    error:false,
    data:[],
    response:"",
    finish:false,
}  
  const updateStatusReducer =  (state=initialState, action) => {
    switch (action.type) {
     
      case  UPDATE_STATUS:
        return {...state,data:action.payload} ;

      case UPDATED_STATUS:
        return {...state,error:false,response:action.payload,finish:true}  ;

      case UPDATED_STATUS_ERROR:
        return {...state,error:true};  ;

      default:
        return state;
    }
  };
  
  export {updateStatusReducer}