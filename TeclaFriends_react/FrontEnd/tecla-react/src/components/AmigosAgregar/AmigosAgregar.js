import './AmigosAgregar.css';
import { useEffect } from 'react';
import { sendRequest, cancelQuery } from "../../redux/actions/request";
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { discoverFriends } from '../../redux/actions/discoverFriends'
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    friendDiscover: state.discoverFriendReducer.friendDiscover,
    finish: state.discoverFriendReducer.finish,
    send:state.requestReducer.send,
  };
};

function AmigosAgregar({ send,sendRequest, cancelQuery, discoverFriends, friendDiscover, finish }) {
  let comparation = "hola"
  let contador = 0;

  const [user] = useLocalStorage("USER", {})

  const traerAmigos = async () => {
    discoverFriends(user.mail)
  }

  const sendQuery = (info) => {
    //e.preventDefault();
    let data = {
      receptor: info.mail,
      emisor: user.mail,
      status: "pendiente",
    };
    sendRequest(data)
  }

  const cancel = (info) => {
    //e.preventDefault();
    let data = {
      receptor: info.mail,
      emisor: user.mail,
      status: "cancel",
    };
    cancelQuery(data)
  }

  useEffect(() => {
    traerAmigos()
  }, [])



  return (
    <div id="container-friends" className="d-flex justify-content-between flex-wrap">
      {finish &&
        <>
          {
            friendDiscover.filter(friend => {
              if (contador > 0) {
                comparation = friendDiscover[contador - 1].mail;
              }
              contador++;
              return friend.mail != comparation
            }
            )
              .map(r => (
                <div className="card perfil_containers">
                  <div key={r.mail} className="card-body">
                    <img src={r.profile_photo} className="perfil card-img-top " alt="..." />
                    <div className="card-body ">
                      <h5 className="card-title">{r.name}</h5>
                      <h5 className="card-title">{r.middle_name}</h5>
                      <p className="card-text">{r.country}</p>

                      {!send &&
                        <a onClick={()=>{ sendQuery(r) }}  className="btn btn-info" >
                          <i className="fa-solid fas fa-user-plus size-icon"></i>
                        </a>
                      }

                      {send &&
                        <a onClick={()=>{ cancel(r)}}  href="#" className="btn btn-danger" >cancel</a>
                      }

                    </div>
                  </div>
                </div>
              )

              )
          }
        </>
      }

    </div>
  );
}
export default connect(mapStateToProps, { sendRequest, cancelQuery, discoverFriends })(AmigosAgregar);
