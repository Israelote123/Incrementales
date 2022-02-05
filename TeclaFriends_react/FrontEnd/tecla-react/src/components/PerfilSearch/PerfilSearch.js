import './PerfilSearch.css'
import { useLocalStorage } from '../../hooks/useLocalStorage'


import { connect } from "react-redux";
import { sendRequest } from "../../redux/actions/request";

const mapStateToProps = (state) => {
  return {
    send:state.requestReducer.send,
    loading: state.requestReducer.loading,
    error: state.requestReducer.error,
  }
}

function PerfilSearch({ sendRequest,send, loading, error, }) {

  const [searchUser] = useLocalStorage("BUSQUEDA", {})

  const sendQuery = (e) => {
    e.preventDefault();
    console.log("solicitud mandada")

    let data = {
      receptor: "juan@algo",
      emisor: "pedro@algo",
      status: "pendiente",
    };

    setTimeout(() => {
      sendRequest(data)
    }, 2000)

  }

  return (
    <div id="contenedor" >
      <div >
        <img src={searchUser.profile_photo} className="perfilUser" alt="..." id="userPhoto"></img>
        <div className="row" >
          <div className="userName">{searchUser.name} {searchUser.middle_name} {searchUser.last_name}</div>
          <div className="col-6 infoUser"> Contacto: {searchUser.mail}</div>
          <div className="col-6 infoUser"> Lenguajes dominados: {searchUser.lenguages}</div>
          <div className="col-12 infoUser"> LinkedIn: <a href={searchUser.linkedIn} id="linkedIn">{searchUser.linkedIn}</a></div>
          <div className="col-6 infoUser"> Direccion: {searchUser.country}, {searchUser.city}</div>
          <div className="col-6 infoUser"> Hobbies: {searchUser.hobbies}</div>

          {!loading &&
            <div className="col-6 infoUser"><a onClick={sendQuery} href="#" className="btn btn-info" >add user</a></div>

          }

          {loading && (
            <div className="text-center">
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {error && (
            <div className="alert alert-danger" role="alert">
              No es posible conectar con la base de datos
            </div>
          )}

          {send &&
               <div className="alert alert-success" role="alert">
               solicitud mandada
             </div>
          }

        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, { sendRequest })(PerfilSearch);

//export {PerfilSearch};