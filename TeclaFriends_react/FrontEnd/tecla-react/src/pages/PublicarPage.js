import { BarraLat } from "../components/BarraLat/BarraLat";
import {Publicar} from '../components/Publicar/Publicar';
import {BarraLatRight} from '../components/BarraLatRight/BarraLatRight'
import Spiderman from '../components/Spiderman/Spiderman'
import { useState,useContext } from 'react';
import { ThemeContext } from '../Context/AppContext'

import { connect } from "react-redux";


const mapStateToProps = (state)=>{
    return{
      tema: state.themeReducer
    }
  }

function PublicarPage({tema}) {
    const limpiar=()=>{
        boxState(false)
    }
    const[box,boxState]=useState(false)
    //const {modo, modoState} = useContext(ThemeContext);
   
    
    
    return (
        <div style={tema}  onClick={limpiar}>
            <div className="container-fluid">
                <div className="row">
                    <div  className="col-lg-3">
                        <BarraLat />
                    </div>
                    <div className="col-lg-6">
                        <Publicar />
                    </div>
                    <div className="col-lg-3">
                        <BarraLatRight />
                        <Spiderman />
                    </div>
                </div>
            </div>
        </div>
    );
}

//export { PublicarPage };
export default connect(mapStateToProps)(PublicarPage);
