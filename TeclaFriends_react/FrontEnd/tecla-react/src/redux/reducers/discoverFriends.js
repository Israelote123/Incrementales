import { DISCOVER_FRIENDS ,DISCOVERED_FRIENDS, DISCOVER_FRIENDS_ERROR} from '../actions/const'

const initialState={
    user:"",
    error:false,
    friendDiscover:[],
    finish:false,
}  

  const discoverFriendReducer =  (state=initialState, action) => {
    switch (action.type) {
     
      case DISCOVER_FRIENDS:
        return {...state,user:action.payload} ;

      case DISCOVERED_FRIENDS:
        return {...state,error:false,friendDiscover:action.payload,finish:true}  ;

      case DISCOVER_FRIENDS_ERROR:
        return {...state,error:true};  ;

      default:
        return state;
    }
  };
  
  export {discoverFriendReducer}
