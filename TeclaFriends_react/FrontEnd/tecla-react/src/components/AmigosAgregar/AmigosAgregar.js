import './AmigosAgregar.css';
import { useState,useEffect } from 'react';
import { getFriends } from '../../api/api'

function AmigosAgregar() {
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

   useEffect(()=>{
    traerAmigos()
   },[])
    //{state&&
      //  traerAmigos()
    //}   
    return (
        <div id="container-friends" class="d-flex justify-content-between flex-wrap">
         {
           save.map(r =>                                                                                                                                             
                  <div className="card perfil_container">
                        <div className="card-body">
                          <img src={r.profile_photo} className="perfil card-img-top " alt="..."/>
                          <div className="card-body ">
                             <h5 className="card-title">{r.name}</h5>
                             <h5 className="card-title">{r.middle_name}</h5>
                             <p className="card-text">{r.country}</p>
                             <a href="#" className="btn btn-info" >add user</a>
                          </div>
                       </div>
                    </div>                                    
                  )
          }     
        </div>  
    );
}
export { AmigosAgregar };
