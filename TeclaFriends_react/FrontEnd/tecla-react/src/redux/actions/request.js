import { REQUEST_SEND,REQUEST_CANCEL} from "./const";


const cancelQuery=()=>{
    console.log("cancelado")  
    return{
        type: REQUEST_CANCEL,
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


