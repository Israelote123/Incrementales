import './PerfilSearch.css'
import {useLocalStorage} from '../../hooks/useLocalStorage'

function PerfilSearch() {
<<<<<<< HEAD

  const [searchUser] = useLocalStorage("BUSQUEDA", {}) 
=======
    let variable = localStorage.getItem("variable2");
    
    const [perfils, setPerfils] = useState([]);  
    const [profile,setProfile]=useState(variable)
    
    const perfilFeatures = async () => {
        //event.preventDefault()
        let newFeatures = await getPerfil(variable)
        let featuresJSON = await newFeatures.json()
        setPerfils(perfils[0]=featuresJSON)         
    }

    useEffect(()=>{
      console.log("efect")
      perfilFeatures()
    },)
    console.log("render")
    
>>>>>>> nocturno

  return (
      <div id="contenedor" >
        <div >
          <img src={searchUser.profile_photo}  className="perfilUser" alt="..." id="userPhoto"></img> 
          <div className="row" >
            <div className="userName">{searchUser.name} {searchUser.middle_name} {searchUser.last_name}</div>
            <div className="col-6 infoUser"> Contacto: {searchUser.mail}</div>
            <div className="col-6 infoUser"> Lenguajes dominados: {searchUser.lenguages}</div>
            <div className="col-12 infoUser"> LinkedIn: <a href={searchUser.linkedIn}  id="linkedIn">{searchUser.linkedIn}</a></div>
            <div className="col-6 infoUser"> Direccion: {searchUser.country}, {searchUser.city}</div>
            <div className="col-6 infoUser"> Hobbies: {searchUser.hobbies}</div>
          </div>
        </div>
      </div>
  );
}

export {PerfilSearch};