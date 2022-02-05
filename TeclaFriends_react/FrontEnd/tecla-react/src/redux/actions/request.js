import { REQUEST_SEND} from "./const";

const sendRequest=(data)=>{  
    return{
        type: REQUEST_SEND ,
        payload:data,
        loading:true     
    }
}

export {sendRequest}


