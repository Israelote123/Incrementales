//provedor de contexto
import React,{ createContext } from 'react';
import { useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

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


function ThemeProvider({children}) {
    const [modo, modoState] = useState(themes.dark);
    
    return (
        <ThemeContext.Provider value={{modo,modoState}} >
           {children}
        </ThemeContext.Provider>        
    );
}

export  {ThemeProvider};
export { ThemeContext};


/*

import React from 'react';

const themes= {
    dark:{
        color:"white",
        background:"black"
    },
    light:{
        color:"black",
        background:"white"
    }
};


const ThemeContext=React.createContext(themes.light);
export {ThemeContext,themes};*/ 