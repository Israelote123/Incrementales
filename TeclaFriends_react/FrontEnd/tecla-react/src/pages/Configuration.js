import { useState,useContext } from 'react';
import {Nav} from '../components/Nav/Nav'
import Config  from "../components/Config/Config";
import { BarraLat } from "../components/BarraLat/BarraLat";
import {ShowFriends} from '../components/ShowFriends/ShowFriends';
import {BarraLatRight} from '../components/BarraLatRight/BarraLatRight'
import Spiderman from '../components/Spiderman/Spiderman'
import { ThemeContext } from '../Context/AppContext'


function Configuration() {
    const limpiar=()=>{
        boxState(false)
    }
    const[box,boxState]=useState(false)
    const {modo, modoState} = useContext(ThemeContext);
   
    
    return (
        <div style={modo}  onClick={limpiar}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <Config/>
                    </div>                   
                </div>
            </div>
        </div>
    );
}

export {Configuration};