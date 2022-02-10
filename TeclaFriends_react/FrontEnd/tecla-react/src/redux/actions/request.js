import { REQUEST_SEND,REQUEST_CANCEL} from "./const";


const cancelQuery=(data)=>{
   
    return{
        type: REQUEST_CANCEL,
        payload:data,
        send:false,   
    }
}

const sendRequest=(data)=>{  
    return{
        type: REQUEST_SEND ,
        payload:data,
        loading:true     
    }
}

export {sendRequest,cancelQuery}


