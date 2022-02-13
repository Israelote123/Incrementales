//import './AmigosAgregar.css';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { showPossibleFriends } from '../../redux/actions/possibleFriend'
import { updateStatus} from '../../redux/actions/status'
import { sendRequest } from "../../redux/actions/request";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    possible_friend: state.posibbleFriendReducer.possible_friend,
    finish: state.posibbleFriendReducer.finish,
    
  };
};


function ShowSolicitudes({ sendRequest ,updateStatus,possible_friend, finish, showPossibleFriends }) {
  const [user] = useLocalStorage("USER", {})
  const [profileRequests,profileRequestsSearch] = useLocalStorage("REQUEST", {});
 

  const traerAmigos = async () => {
    showPossibleFriends(user.mail)
  }

  const update = (info,estado) => {
  
    let data = { 
      name:info.name,   
      emisor: info.mail,
      receptor: user.mail,
      status: estado,
     };
     
     
     updateStatus(data)

     
     let data2 = {
      receptor: info.mail,
      emisor: user.mail,
      status: "amigo",
    };
    sendRequest(data2)
     
     
     
     
     console.log(data)

  }
   


  useEffect(() => {
    traerAmigos()
  }, [possible_friend])

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
                    <a onClick={() => { update(r,"amigo") }} href="#" className="btn btn-info" >Accept</a>
                    <br></br>
                    <br></br>
                    <a onClick={() => { update(r,"rechazado") }} href="#" className="btn btn-danger" >Reject</a>
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
export default connect(mapStateToProps, { sendRequest ,showPossibleFriends,updateStatus })(ShowSolicitudes);

