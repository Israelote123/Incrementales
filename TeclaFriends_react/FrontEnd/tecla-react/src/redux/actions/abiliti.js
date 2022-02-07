import {SET_LOADING, SAVE_ABILITI} from "./const";

const setLoading=()=>{  
    return{
        type: SET_LOADING, 
        loading:true     
    }
}

const saveAbiliti=(abiliti)=>{  
    return{
        type: SAVE_ABILITI ,
        payload:abiliti,
        loading:false,     
    }
}
 

export {setLoading,saveAbiliti}