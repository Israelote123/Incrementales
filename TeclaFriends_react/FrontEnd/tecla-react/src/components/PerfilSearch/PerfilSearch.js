import './PerfilSearch.css'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { connect } from "react-redux";
import { sendRequest,cancelQuery } from "../../redux/actions/request";
import {useLocalStorage} from "../../hooks/useLocalStorage"

const mapStateToProps = (state) => {
  return {
    send:state.requestReducer.send,
    loading: state.requestReducer.loading,
    error: state.requestReducer.error,
    dataSearch : state.searchReducer.dataSearch
  }
}

function PerfilSearch({ sendRequest,send, loading, error, dataSearch, cancelQuery }) {
  const [searchUser] = useLocalStorage("BUSQUEDA", {})
  const [user]= useLocalStorage("USER",{})

  const [user] = useLocalStorage("USER",{})

  const sendQuery = (e) => {
    e.preventDefault();
      let data = {
      receptor: dataSearch.mail,
      emisor: user.mail,
      status: "pendiente",
    };

    sendRequest(data)

  }

  const cancel=(e)=>{
    e.preventDefault();
    cancelQuery()
  }

  return (
    <div id="contenedor" >
      <div >
        <img src={dataSearch.profile_photo} className="perfilUser" alt="..." id="userPhoto"></img>
        <div className="row" >
          <div className="userName">{dataSearch.name} {dataSearch.middle_name} {dataSearch.last_name}</div>
          <div className="col-6 infoUser"> Contacto: {dataSearch.mail}</div>
          <div className="col-6 infoUser"> Lenguajes dominados: {dataSearch.lenguages}</div>
          <div className="col-12 infoUser"> LinkedIn: <a href={dataSearch.linkedIn} id="linkedIn">{dataSearch.linkedIn}</a></div>
          <div className="col-6 infoUser"> Direccion: {dataSearch.country}, {dataSearch.city}</div>
          <div className="col-6 infoUser"> Hobbies: {dataSearch.hobbies}</div>
          {!loading &&
            <div className="col-6 infoUser"><a onClick={sendQuery} className="btn btn-info" >add user</a></div>
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
                <div className="col-6 infoUser"><a onClick={cancel} href="#" className="btn btn-danger" >cancel</a></div>
          }
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, { sendRequest,cancelQuery })(PerfilSearch);

//export {PerfilSearch};