import './ShowFriends.css';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { showFriends } from '../../redux/actions/showFriends'
import { updateStatus} from '../../redux/actions/status'
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    friend: state.friendReducer.friend,
    finish: state.friendReducer.finish,

  };
};

function ShowFriends({updateStatus,showFriends, friend, finish }) {
  const [user] = useLocalStorage("USER", {})

  const traerAmigos = async () => {
    showFriends(user.mail)
  }

  const update = (info,estado) => {
  
    let data = { 
      name:info.name,   
      emisor: info.mail,
      receptor: user.mail,
      status: estado,
     };
     

     updateStatus(data)
     console.log(data)
     // saveCourse(data)
  }

  useEffect(() => {
    traerAmigos()
  },[])

  return (
    <div id="container-friends" className="d-flex justify-content-between flex-wrap">
      {finish &&
        <>
          {
            friend.map(r =>
              <div className="card perfil_container">
                <div className="card-body">
                  <img src={r.profile_photo} className="perfil card-img-top " alt="..." />
                  <div className="card-body ">
                    <h5 className="card-title">{r.name}</h5>
                    <h5 className="card-title">{r.middle_name}</h5>
                    <h5 className="card-title">{r.status}</h5>
                    <p className="card-text">{r.country}</p>
                    
                    
                    <a onClick={() => { update(r,"rechazado") }} href="#" className="btn btn-danger" ><i className="fa-solid fas fa-user-minus"></i></a>
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
export default connect(mapStateToProps, { updateStatus  ,showFriends })(ShowFriends);