import{ GET_POSIBBLE_FRIENDS} from "./const";

const showPossibleFriends=(user)=>{  
    return{
        type: GET_POSIBBLE_FRIENDS,
        payload:user,
        loading:false,     
    }
}
 
export {showPossibleFriends}