import { useState,useContext} from 'react';
import {Nav} from '../components/Nav/Nav'
import { BarraLat } from "../components/BarraLat/BarraLat";
import {Publicar} from '../components/Publicar/Publicar';
import {BarraLatRight} from '../components/BarraLatRight/BarraLatRight'
import {Spiderman} from '../components/Spiderman/Spiderman'

import { ThemeContext, themes } from '../Context/AppContext'


function PublicarPage() {
    const limpiar=()=>{
        boxState(false)
    }
    const[box,boxState]=useState(false)
    const {modo, modoState} = useContext(ThemeContext);
   
    
    
    return (
        <div onClick={limpiar}>
            <Nav box={box} boxState={boxState}/>
            <div className="container-fluid">
                <div className="row">
                    <div style={modo} className="col-lg-3">
                        <BarraLat />
                    </div>
                    <div style={{color:"white",background:"black"}} className="col-lg-6">
                        <Publicar />
                    </div>
                    <div style={{color:"white",background:"black"}} className="col-lg-3">
                        <BarraLatRight />
                        <Spiderman />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { PublicarPage };