import './AmigosAgregar.css';
import {useEffect } from 'react';


import { useLocalStorage } from '../../hooks/useLocalStorage'
import { discoverFriends } from '../../redux/actions/discoverFriends'
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    friendDiscover: state.discoverFriendReducer.friendDiscover,
    finish: state.discoverFriendReducer.finish,

  };
};

function AmigosAgregar({ discoverFriends, friendDiscover, finish }) {
  const [user] = useLocalStorage("USER", {})

  const traerAmigos = async () => {
    discoverFriends(user.mail)
  }

  useEffect(() => {
    traerAmigos()
  }, [])

  return (
    <div id="container-friends" className="d-flex justify-content-between flex-wrap">
      {finish &&
        <>
          {
            friendDiscover.map(r =>
              <div className="card perfil_container">
                <div className="card-body">
                  <img src={r.profile_photo} className="perfil card-img-top " alt="..." />
                  <div className="card-body ">
                    <h5 className="card-title">{r.name}</h5>
                    <h5 className="card-title">{r.middle_name}</h5>
                    <h5 className="card-title">{r.status}</h5>
                    <p className="card-text">{r.country}</p>
                    <a href="#" className="btn btn-info" >Add user</a>
                  </div>
                </div>
              </div>

            )
          }
        </>
      }

    </div>
  );
}
export default connect(mapStateToProps, { discoverFriends })(AmigosAgregar);
