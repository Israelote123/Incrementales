import  {SET_LOADING,SAVE_HELP} from "./const";

const setLoading=()=>{  
    return{
        type: SET_LOADING, 
        loading:true     
    }
}

const saveHelp=(help)=>{  
    return{
        type: SAVE_HELP ,
        payload:help,
        loading:false,     
    }
}
 

export {setLoading,saveHelp}