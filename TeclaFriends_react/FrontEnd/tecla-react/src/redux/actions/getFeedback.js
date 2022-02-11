import  { GET_FEEDBACK} from "./const";

const getFeedback=(data)=>{
  
    return{
        type: GET_FEEDBACK,
        payload:data,      
    }
} 
export {getFeedback}