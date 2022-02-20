import{ GET_USER_PUBLICATIONS} from "./const";

const showUserPublications=(user)=>{  
    return{
        type: GET_USER_PUBLICATIONS,
        payload:user,  
    }
}
 
export {showUserPublications}