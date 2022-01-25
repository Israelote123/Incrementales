import { useState,useEffect } from 'react';
import {Nav} from '../components/Nav/Nav'
import { Config } from "../components/Config/Config";
import { BarraLat } from "../components/BarraLat/BarraLat";
import {ShowFriends} from '../components/ShowFriends/ShowFriends';
import {BarraLatRight} from '../components/BarraLatRight/BarraLatRight'
import {Spiderman} from '../components/Spiderman/Spiderman'


function Configuration() {
    const limpiar=()=>{
        boxState(false)
    }
    const[box,boxState]=useState(false)
    
    return (
        <div onClick={limpiar}>
            <Nav box={box} boxState={boxState}/>
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