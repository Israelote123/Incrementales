import{ DARK_THEME,LIGHT_THEME} from './const'

const darkChange=()=>{  
    return{
        type: DARK_THEME,
        payload: "black"
        
    }
}
const lightChange=()=>{
    
    return{
        type: LIGHT_THEME,
        payload: "white"
        
    }
}

export {darkChange,lightChange}