
const LIGHT_THEME="LIGHT_THEME"

const DARK_THEME="DARK_THEME"

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