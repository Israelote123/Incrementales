
import { useState,useEffect } from "react"
import './PerfilSearch.css'
import{getPerfil} from '../../api/api'

function PerfilSearch() {
    let variable = localStorage.getItem("variable2");
    
    const [perfils, setPerfils] = useState([]);  
    
    const perfilFeatures = async () => {
        //event.preventDefault()
        let newFeatures = await getPerfil(variable)
        let featuresJSON = await newFeatures.json()
        setPerfils(perfils[0]=featuresJSON)         
    }

    useEffect(()=>{
      console.log("efect")
      perfilFeatures()
    })
    console.log("render")
    

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

export  {PerfilSearch};