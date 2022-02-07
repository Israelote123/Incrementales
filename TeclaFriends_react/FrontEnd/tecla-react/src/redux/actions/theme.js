import {LIGHT_THEME, DARK_THEME} from './const'

const darkChange=()=>{  
    return{
        type: DARK_THEME,
        payload: "black"
        
    }
}
const lightChange=()=>{
    
    return{
        type: LIGHT_THEME,
        payload: "rgba(230, 230, 230, 0.712)"
        
    }
}

export {darkChange,lightChange}