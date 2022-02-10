import { UPDATE_STATUS } from "./const"


const updateStatus=(data)=>{  
    return{
        type: UPDATE_STATUS,
        payload:data,  
    }
}

export {updateStatus}