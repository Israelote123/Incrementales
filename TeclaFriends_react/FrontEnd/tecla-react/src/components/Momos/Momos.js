import './Momos.css';
import { useState } from 'react';
import { getMomos } from '../Api/Api'


function Momos() {
    const [save, setSave] = useState([0]);
    const [state, setState] = useState(true);

    const traerMemes = async () => {
        let newPokemon = await getMomos()
        let pokeJSON = await newPokemon.json()

        setSave(save[0] = pokeJSON)
        setState(false)
        console.log("memes")
    }


   
    setInterval(()=>{
        traerMemes()
        
    },5000)

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <img className="momo card-img-top" src={save.url} alt="..." />
                </div>
            </div>
        </div>
    );
}

export { Momos };