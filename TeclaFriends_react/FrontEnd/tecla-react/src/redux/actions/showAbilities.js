import { GET_ABILITI} from "./const";


const showAbilities=(user)=>{  
    return{
        type: GET_ABILITI ,
        payload:user,
        loading:false,     
    }
}
 
export {showAbilities}