import { useState,useContext } from 'react';
import {Nav} from '../components/Nav/Nav'
import { BarraLat } from "../components/BarraLat/BarraLat";
import {AmigosAgregar} from '../components/AmigosAgregar/AmigosAgregar';
import {BarraLatRight} from '../components/BarraLatRight/BarraLatRight'
import {Spiderman} from '../components/Spiderman/Spiderman'
import { ThemeContext } from '../Context/AppContext'
import { MessageComponent } from '../components/MessageComponent/MessageComponent';


function AgregarAmigos() {
    const limpiar=()=>{
        boxState(false)
    }

    const[box,boxState]=useState(false)
    const {modo, modoState} = useContext(ThemeContext);
   
    
    return (
        <div style={modo}  onClick={limpiar}>
            <Nav box={box} boxState={boxState}/>
            <MessageComponent/>
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

export {AgregarAmigos};