const themes = {
    dark: {
        //color: "white",
        background: "black"
    },
    light: {
        //color: "black",
        background: "white"
    }
};


  
  const themeReducer =  (state =themes.light , action) => {
    switch (action.type) {
      case "DARK_THEME":
        return state=themes.dark ;

      case "LIGHT_THEME":
        return state=themes.light ;
     
      default:
        return state;
    }
  };
  
  export {themeReducer}