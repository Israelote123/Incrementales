import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useState } from 'react';
import './Perfil.css'
import ShowCourses from '../ShowCourses/ShowCourses';
import { ContainerPublications } from '../ContainerPublications/ContainerPublications';
import { getFeedback } from "../../redux/actions/getFeedback"
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        error: state.feedbackGetReducer.error,
        feedbackData: state.feedbackGetReducer.feedbackData,
        finish: state.feedbackGetReducer.finish
    };
};




function Perfil({ getFeedback, feedback_data, feedState, finish }) {
    const [user] = useLocalStorage("USER", {})
    const [state, setState] = useState(true);


    const onChange = () => {

        getFeedback(user.mail)
    }





    return (
        <div  >
            <div className="nave card contenedor" >
                <div className="card-body gustos">
                    <div className="  d-flex bd-highlight mb-3">
                        <div className="me-auto p-2 bd-highlight"> <i className=" fa-2x fas fa-paint-brush">WELCOME TO OUR HOME</i></div>
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
                                <i className="fa-2x fas fa-eye"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <br></br>

            





            {feedState &&
                <div className='card'>
                    <div className="card-body">
                        {/*  <ShowCourses />  */}
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
            {state &&
                <>
                    <ContainerPublications />
                </>
            }
        </div>
    );
}
export default connect(mapStateToProps, { getFeedback })(Perfil);