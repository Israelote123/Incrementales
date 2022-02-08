import{ DISCOVER_FRIENDS} from "./const";

const discoverFriends=(user)=>{  
    return{
        type: DISCOVER_FRIENDS,
        payload:user,
        loading:false,     
    }
}
 
export {discoverFriends}