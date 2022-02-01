
import React,{ useEffect, useContext } from 'react';
//import { ThemeContext } from '../../Context/AppContext'

   
import { darkChange,lightChange }  from "../../redux/actions/theme";
import { connect } from "react-redux";

const mapStateToProps = (state)=>{
    return{
      tema: state.themeReducer
    }
  }

function Config({ tema,darkChange,lightChange } ) {
   /* const themes = {
        dark: {
            //color: "white",
            background: "black"
        },
        light: {
            //color: "black",
            background: "white"
        }
    };*/

    //const { modo, modoState } = useContext(ThemeContext)
    
    const changeTheme = () => {
        tema.background=="black"
        ?document.querySelector('#flexRadioDefault1').checked = true
        :document.querySelector('#flexRadioDefault2').checked = true        
    }

  /*const modoFunction=()=>{
       modoState(themes.dark)
       console.log("cambio a dark")
       console.log(modo);
   }*/
  
   /* const modoFunction2=()=>{
    modoState(themes.light)
    console.log("cambio a light")
    console.log(modo);
   }*/

    useEffect(() => {
        changeTheme()
    }, [])

    return (
        <div className='container '>
            <h4>Theme</h4>
            <div   className="form-check d-flex justify-content-evenly flex-wrap ">
                <input  onChange={()=> darkChange()} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>                
                <label   className="form-check-label" htmlFor="flexRadioDefault1">
                <i className="fas fa-cloud-moon"></i>
                        Dark
                </label>              
            </div>
            <div   className="form-check d-flex justify-content-evenly  flex-wrap">                
               <input onChange={()=> lightChange()}  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />               
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                <i className="fas fa-star"></i>
                    Light
                </label>
            </div>
        </div>       
    );
}

//export { Config };

export default connect(mapStateToProps, { darkChange,lightChange } )(Config);
