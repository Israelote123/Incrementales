
const LIGHT_THEME="LIGHT_THEME"

const DARK_THEME="DARK_THEME"

const darkChange=()=>{  
    return{
        type: DARK_THEME
        
    }
}
const lightChange=()=>{
    
    return{
        type: LIGHT_THEME
        
    }
}

export {darkChange,lightChange}