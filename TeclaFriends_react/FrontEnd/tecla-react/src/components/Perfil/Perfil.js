import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useState } from 'react';
import './Perfil.css'
import ShowCourses from '../ShowCourses/ShowCourses';
import PublicationsPerfil from '../PublicationsPerfil/PublicationPerfil';
import { getFeedback } from "../../redux/actions/getFeedback"
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        error: state.feedbackGetReducer.error,
        feedbackData: state.feedbackGetReducer.feedbackData,
        finish: state.feedbackGetReducer.finish
    };
};


function Perfil({ getFeedback, feedbackData, finish }) {
    const [user] = useLocalStorage("USER", {})
    const [state, setState] = useState(false);
    const [show,showState]= useState(false);


    const onChange = () => {
        getFeedback(user.mail)
        showChange() 
    }

    const stateChange = () => {
        setState(!state)
    }
    const showChange = () => {
        showState(!show)
    }





    return (
        <div  >
            <div className="nave card contenedor" >
                <div className="card-body gustos">
                    <div className="  d-flex bd-highlight mb-3">
                        <div className="me-auto p-2 bd-highlight"> <i className="fa-2x fas fa-couch"> WELCOME TO OUR HOME</i></div>
                        <a className="enlaces_nuevos" >
                            <div className="iconos_post">
                                <i className="fa-2x fas fa-graduation-cap"></i>
                                
                            </div>
                        </a>

                        <a className="enlaces_nuevos" >
                            <div className="iconos_post">
                                <i onClick={onChange} className="fa-2x fas fa-envelope"></i>
                            </div>
                        </a>

                        <a className="enlace_nuevos" >
                            <div className="iconos_post">
                                <i onClick={stateChange} className="fa-2x fas fa-eye"></i>
                                
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <br></br>

            {finish && show  &&
                <>
                    <div id='title' className='card container'>

                        <h2>FeedbackFriend</h2>
                        {
                            
                            feedbackData.map(r =>
                            <div style={{ color: "blue" }} className="card perfil_containers" >    
                                <div className="card-body  ">
                                    <h5 className="card-title">Nombre: {r.name}</h5>
                                    <h5 className="card-title">Email: {r.author}</h5>
                                    <h5 className="card-title">Feedback: {r.feedback}</h5>
                                    <p className="card-text">Comentarios Adicionales:{r.commit}</p>
                                </div>
                            </div>
                        )
                    }

                    </div>
                </>
            }





          {state &&
                <div className='card'>
                    <div className="card-body">
                    <ShowCourses />  
                    </div>
                </div>
            }  
          

            <br></br>


            <div className='card contenedor' >
                <div className='card-body' >
                    <img src={user.profile_photo} className="perfilUser" alt="..." id="userPhoto"></img>
                    <div className="row" >
                        <div className="userName">{user.name} {user.middle_name} {user.last_name}</div>
                        <div className="col-6 infoUser"> Contacto: {user.mail}</div>
                        <div className="col-6 infoUser"> Lenguajes dominados: {user.lenguages}</div>
                        <div className="col-12 infoUser"> LinkedIn: <a href={user.linkedIn} id="linkedIn">{user.linkedIn}</a></div>
                        <div className="col-6 infoUser"> Direccion: {user.country}, {user.city}</div>
                        <div className="col-6 infoUser"> Hobbies: {user.hobbies}</div>
                    </div>
                </div>
            </div>

            <br></br>
          
                <>
                    <PublicationsPerfil />
                </>
            
        </div>
    );
}
export default connect(mapStateToProps, { getFeedback })(Perfil);