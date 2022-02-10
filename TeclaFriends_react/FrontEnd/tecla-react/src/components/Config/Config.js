
import React,{ useEffect, useContext } from 'react';
//import { ThemeContext } from '../../Context/AppContext'

   
import { darkChange,lightChange }  from "../../redux/actions/theme";
import { connect } from "react-redux";

const mapStateToProps = (state)=>{
    return{
      tema: state.themeReducer.background
    }
  }

function Config({ tema,darkChange,lightChange } ) {
   
    
    const changeTheme = () => {
        tema=="black"
        ?document.querySelector('#flexRadioDefault1').checked = true
        :document.querySelector('#flexRadioDefault2').checked = true;   
    }

 

    useEffect(() => {
        changeTheme()
        document.querySelector('body').style.background = tema;  
    }, [tema])

    return (
        <div className='container '>
            <h4>Theme</h4>
            <div   className="form-check d-flex justify-content-evenly flex-wrap ">
                <input  onClick={()=> darkChange()} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>                
                <label   className="form-check-label" htmlFor="flexRadioDefault1">
                <i className="fas fa-cloud-moon"></i>
                        Dark
                </label>              
            </div>
            <div   className="form-check d-flex justify-content-evenly  flex-wrap">                
               <input onClick={()=> lightChange()}  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />               
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
