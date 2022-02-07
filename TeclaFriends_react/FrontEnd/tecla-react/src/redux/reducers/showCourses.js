import { GET_COURSE,GOT_COURSE,GOT_COURSE_ERROR} from '../actions/const'

const initialState={
    usuario:"",
    error:false,
    curso:{},
    finish:false,
}  


  const showCourseReducer =  (state=initialState, action) => {
    switch (action.type) {
     
      case  GET_COURSE:
        return {...state,usuario:action.payload} ;

      case GOT_COURSE:
        return {...state,error:false,curso:action.payload,finish:true}  ;

      case GOT_COURSE_ERROR:
        return {...state,error:true};  ;

      default:
        return state;
    }
  };
  
  export {showCourseReducer}