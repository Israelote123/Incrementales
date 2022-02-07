import {SET_LOADING, SAVE_CUORSE} from "./const";

const setLoading=()=>{  
    return{
        type: SET_LOADING, 
        loading:true     
    }
}

const saveCourse=(curso)=>{  
    return{
        type: SAVE_CUORSE ,
        payload:curso,
        loading:true     
    }
}

export {saveCourse,setLoading}