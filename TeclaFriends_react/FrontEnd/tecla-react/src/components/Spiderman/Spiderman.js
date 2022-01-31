import spider from './spider2.jpg'
import spiderBlack from './spiderman_negro.jpg'
import spiderbebe from './bebespi.jpg'
import './Spiderman.css';

import { ThemeContext } from '../../Context/AppContext'
import {useState,useContext} from 'react';

function Spiderman() {
    const { modo, modoState } = useContext(ThemeContext)
    console.log("spiderman")
    console.log(modo.background)
    
    return (
        <div className="container">
            {modo.background=="white"&& 
                  <div style={modo} className="Spiderman">
                  <img src={spider} className="tobey" alt='spiderman'></img>
                </div>
            }           
            {modo.background=="black"&& 
                <div style={modo} className="Spiderman">
                <img src={spiderBlack} className="andrew" alt='spiderman'></img>
                </div>
            }            
        </div>
    );
}
export { Spiderman };