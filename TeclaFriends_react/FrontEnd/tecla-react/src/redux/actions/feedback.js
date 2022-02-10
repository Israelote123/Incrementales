
import  { SAVE_FEEDBACK} from "./const";


const saveFeedback=(data)=>{
    return{
        type: SAVE_FEEDBACK,
        payload:data,
       
    }
}
 

export {saveFeedback}