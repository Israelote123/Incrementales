import { useLocalStorage } from '../../hooks/useLocalStorage'
import './Perfil.css'

function Perfil() {
  const [user]= useLocalStorage("USER",{})

  return (
      <div id="contenedor" > 
        <div >
          <img src={user.profile_photo}  className="perfilUser" alt="..." id="userPhoto"></img> 
          <div className="row" >
            <div className="userName">{user.name} {user.middle_name} {user.last_name}</div>
            <div className="col-6 infoUser"> Contacto: {user.mail}</div>
            <div className="col-6 infoUser"> Lenguajes dominados: {user.lenguages}</div>
            <div className="col-12 infoUser"> LinkedIn: <a href={user.linkedIn}  id="linkedIn">{user.linkedIn}</a></div>
            <div className="col-6 infoUser"> Direccion: {user.country}, {user.city}</div>
            <div className="col-6 infoUser"> Hobbies: {user.hobbies}</div>
          </div>
        </div>
      </div>
     );
}

export  {Perfil};