import { GET_NOTIFICATIONS} from "./const";

const showNotifications=(user)=>{  
    return{
        type: GET_NOTIFICATIONS ,
        payload:user,
        loading:false,     
    }
}
 
export {showNotifications}