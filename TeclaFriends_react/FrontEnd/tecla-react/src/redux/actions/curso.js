import { SAVE_CUORSE} from "./const";

const saveCourse=(curso)=>{  
    return{
        type: SAVE_CUORSE ,
        payload:curso,
        loading:true     
    }
}
 
/*const savingCourse=()=>{  
    return{
        type: SAVING_CUORSE ,
        loading:true       
    }
}
const savedCourse=()=>{  
    return{
        type: SAVED_CUORSE ,
        loading:false       
    }
}*/
export {saveCourse}