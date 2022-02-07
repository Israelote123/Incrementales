//import './AmigosAgregar.css';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { showPossibleFriends } from '../../redux/actions/possibleFriend'
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    possible_friend: state.posibbleFriendReducer.possible_friend,
    finish: state.posibbleFriendReducer.finish,

  };
};


function ShowSolicitudes({ possible_friend, finish, showPossibleFriends }) {
  const [user] = useLocalStorage("USER", {})
 

  const traerAmigos = async () => {
    showPossibleFriends(user.mail)
  }

  useEffect(() => {
    traerAmigos()
  }, [])

  return (
    <div id="container-friends" className="d-flex justify-content-between flex-wrap">
      {finish && 
        <>
          {
            possible_friend.map(r =>
               
              
             
              <div className="card perfil_container">
                <div className="card-body">
                  <img src={r.profile_photo} className="perfil card-img-top " alt="..." />
                  <div className="card-body ">
                    <h5 className="card-title">{r.name}</h5>
                    <h5 className="card-title">{r.middle_name}</h5>
                    <h5 className="card-title">{r.status}</h5>
                    <p className="card-text">{r.country}</p>
                    <a href="#" className="btn btn-info" >Accept</a>
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
export default connect(mapStateToProps, { showPossibleFriends })(ShowSolicitudes);

