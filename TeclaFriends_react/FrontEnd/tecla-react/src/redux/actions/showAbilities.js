import { GET_ABILITY} from "./const";


const showAbilities=(user)=>{  
    return{
        type: GET_ABILITY ,
        payload:user,
        loading:false,     
    }
}
 
export {showAbilities}