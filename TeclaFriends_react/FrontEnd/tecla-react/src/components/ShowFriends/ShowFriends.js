import './ShowFriends.css';
import { useState } from 'react';
import { getFriends } from '../Api/Api'

function ShowFriends() {
    const [save, setSave] = useState([]);
    const [state, setState] = useState(true);

    const traerAmigos =async () => {
        let newPokemon = await getFriends()
        let pokeJSON = await newPokemon.json()
        
        
        setSave(save[0] = pokeJSON)
        console.log(pokeJSON)
        console.log(save)
        setState(false)
    }

    {state&&
        traerAmigos()
    }   
    return (
        <div>
         {
           save.map(r =>                                                                                                                                             
                  <div className="card">
                        <div className="card-body">

                          <img src={r.profile_photo} className="perfil card-img-top " alt="..."/>
                            <div className="card-body">
                             <h5 className="card-title">{r.name}</h5>
                             <h5 className="card-title">{r.middle_name}</h5>
                             <p className="card-text">{r.country}</p>                          
                          </div>
                       </div>
                    </div>                                    
                  )
          }     
        </div>  
    );
}
export { ShowFriends };