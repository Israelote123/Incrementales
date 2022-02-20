
import{ GET_ALL_PUBLICATIONS} from "./const";

const showAllPublications=(user)=>{  
    return{
        type: GET_ALL_PUBLICATIONS,
        payload:user,  
    }
}
 
export {showAllPublications}