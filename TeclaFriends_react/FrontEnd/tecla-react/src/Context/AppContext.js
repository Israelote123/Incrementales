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


const ThemeContext=React.createContext(themes);

export {ThemeContext,themes};