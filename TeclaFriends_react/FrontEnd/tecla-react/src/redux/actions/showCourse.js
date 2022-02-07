import { GET_COURSE} from "./const";



const showCourse=(user)=>{  
    return{
        type: GET_COURSE ,
        payload:user,
        loading:false,     
    }
}
 
export {showCourse}