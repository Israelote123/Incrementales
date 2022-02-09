import {SET_LOADING, SAVE_ABILITY} from "./const";

const setLoading=()=>{  
    return{
        type: SET_LOADING, 
        loading:true     
    }
}

const saveAbility=(ability)=>{
    return{
        type: SAVE_ABILITY,
        payload:ability,
        loading:false,
    }
}
 

export {setLoading,saveAbility}