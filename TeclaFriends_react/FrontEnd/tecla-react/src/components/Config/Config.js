import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../Context/AppContext'

function Config() {
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

    const { modo, modoState } = useContext(ThemeContext)
    let comparacion=modo
    const changeTheme = () => {
        if(comparacion==themes.light){
            document.querySelector('#flexRadioDefault2').checked = true;
        } 
        else if(comparacion==themes.light)
        {
            document.querySelector('#flexRadioDefault1').checked = true;
        }      
        console.log("entra")
    }

   const modoFunction=()=>{
       modoState(themes.dark)
       console.log("cambio a dark")
       console.log(modo);
   }
   const modoFunction2=()=>{
    modoState(themes.light)
    console.log("cambio a light")
    console.log(modo);
   }



    // modo== themes.dark
    //?modoState(themes.light)
    //:modoState(themes.dark);

    useEffect(() => {
        changeTheme()
    }, [])

    return (
        <div className='container'>
            <div   className="form-check">
                <input  onChange={modoFunction} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label   className="form-check-label" htmlFor="flexRadioDefault1">
                        Dark
                </label>
            </div>
            <div   className="form-check">
                
                <input onChange={modoFunction2}  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label   className="form-check-label" htmlFor="flexRadioDefault2">
                    Light
                </label>
            </div>

            

        </div>


        /*{  <div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="radio" role="switch" name="modo" id="flexSwitchCheckDefault" onChange={modoFunction} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="radio" role="switch" name="modo" id="flexSwitchCheckChecked" onChange={modoFunction2} />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">light</label>
            </div>
        </div>
       */
    );
}

export { Config };

/*import { useState,useEffect, useContext } from 'react';
import { ThemeContext } from '../../Context/AppContext'

function Config() {
    
    const [modo, modoState] = useState(useContext(ThemeContext));
    console.log(modo)
    const modoFunction = (e) => {
        modoState(themes.light)
        console.log("dark")
        console.log(modo)
    }
    
    useEffect(()=>{

    },[])
    const modoFunction2 = (e) => {
        modoState(themes.dark)
        console.log("light")
        console.log(modo)
        //console.log(e.target.value)
    }
    return (
        <div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="radio" role="switch" name="modo" id="flexSwitchCheckDefault" onChange={modoFunction} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="radio" role="switch" name="modo" id="flexSwitchCheckChecked" onChange={modoFunction2} />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">light</label>
            </div>
        </div>

    );
}

export { Config }; */