import { GET_POSIBBLE_FRIENDS,GOT_POSIBBLE_FRIENDS,GOT_POSIBBLE_FRIENDS_ERROR} from '../actions/const'

const initialState={
    usuario:"",
    error:false,
    possible_friend:[],
    finish:false,
}  
  const posibbleFriendReducer =  (state=initialState, action) => {
    switch (action.type) {
     
      case  GET_POSIBBLE_FRIENDS:
        return {...state,usuario:action.payload} ;

      case GOT_POSIBBLE_FRIENDS:
        return {...state,error:false,possible_friend:action.payload,finish:true}  ;

      case GOT_POSIBBLE_FRIENDS_ERROR:
        return {...state,error:true};  ;

      default:
        return state;
    }
  };
  
  export {posibbleFriendReducer}