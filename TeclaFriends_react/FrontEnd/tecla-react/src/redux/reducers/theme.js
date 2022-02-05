import {LIGHT_THEME, DARK_THEME} from '../actions/const'

const themes = {
        background: "rgba(230, 230, 230, 0.712)"
};


  
  const themeReducer =  (state =themes , action) => {
    switch (action.type) {
      case DARK_THEME:
        return {...state,background: action.payload };
       

      case LIGHT_THEME:
        return {...state,background: action.payload };
    
     
      default:
        return state;
    }
  };
  
  export {themeReducer}