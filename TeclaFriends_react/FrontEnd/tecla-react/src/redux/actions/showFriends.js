import{ GET_FRIENDS} from "./const";

const showFriends=(user)=>{  
    return{
        type: GET_FRIENDS,
        payload:user,
        loading:false,     
    }
}
 
export {showFriends}