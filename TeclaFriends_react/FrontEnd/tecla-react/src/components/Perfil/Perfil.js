import { useState } from "react"
import './Perfil.css'
import{getPerfil} from '../../api/api'

function Perfil() {
    let variable = localStorage.getItem("variable");
    
    const [perfils, setPerfils] = useState([]);  
    const[state,setState]=useState(true);    

    const perfilFeatures = async () => {
        //event.preventDefault()
        let newFeatures = await getPerfil(variable)
        let featuresJSON = await newFeatures.json()
        setPerfils(perfils[0]=featuresJSON)
        console.log(perfils)
        setState(false)      
    }
    if(state){
        perfilFeatures()
    }

    return (
        <div id="contenedor" >
            { perfils.map(r =>    
              <div >
                 <img src={r.profile_photo}  className="perfilUser" alt="..." id="userPhoto"></img> 
                   <div className="row" >
                           <div className="userName">{r.name} {r.middle_name} {r.last_name}</div>
                           <div className="col-6 infoUser"> Contacto: {r.mail}</div>
                           <div className="col-6 infoUser"> Lenguajes dominados: {r.lenguages}</div>
                           <div className="col-12 infoUser"> LinkedIn: <a href={r.linkedIn}  id="linkedIn">{r.linkedIn}</a></div>
                           <div className="col-6 infoUser"> Direccion: {r.country}, {r.city}</div>
                           <div className="col-6 infoUser"> Hobbies: {r.hobbies}</div>
                   </div>
                </div>
              )
          }
        </div>
     );
}

export  {Perfil};