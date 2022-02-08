import { Nav } from "../components/Nav/Nav";
import { BarraLat } from "../components/BarraLat/BarraLat";
import AmigosAgregar from '../components/AmigosAgregar/AmigosAgregar';
import {BarraLatRight} from '../components/BarraLatRight/BarraLatRight'
import Spiderman from '../components/Spiderman/Spiderman';
import {useState} from 'react';
//import { ThemeContext } from '../Context/AppContext'
import { MessageComponent } from '../components/MessageComponent/MessageComponent';

import { connect } from "react-redux";

const mapStateToProps = (state)=>{
    return{
      tema: state.themeReducer
    }
  }

function AgregarAmigos({tema}) {
    const limpiar=()=>{
        boxState(false)
    }

    const[box,boxState]=useState(false)
    //const {modo, modoState} = useContext(ThemeContext);
   
    
    return (
        <div style={tema}  onClick={limpiar}>
            {/*<MessageComponent/>*/}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <BarraLat />
                    </div>
                    <div className="col-lg-6">
                      <AmigosAgregar/>                       
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

connect(mapStateToProps)(AgregarAmigos);

export {AgregarAmigos};