import './Publicar.css';
import { useState } from 'react';
import  Cursos  from '../Cursos/Cursos';
import  ShowCourses  from '../ShowCourses/ShowCourses';
import  AgregarHabilidad  from "../AgregarHabilidad/AgregarHabilidad";
import  Help  from "../Help/Help"
import  ContainerPublications  from '../ContainerPublications/ContainerPublications';
import { useLocalStorage } from '../../hooks/useLocalStorage'

function Publicar() {
    const [user] = useLocalStorage("USER", {})
    const [save, setSave] = useState(false);
    const [state, setState] = useState(false);
    const [abil, setAbil] = useState(false);
    const [help, setHelp] = useState(false);

    const changeSave = () => {
        setSave(!save)
    }
    const changeState = () => {
        setState(!state)
    }
    const changeAbil = () => {
        setAbil(!abil)
    }
    const ayuda = () => {
        setHelp(!help)
    }
    const abrir = () => {
        var file = document.getElementById("file").click();
        }  
        
        const onSubmit = (event) => {
            event.preventDefault()
            let data = {
                mail: user.mail,
                contenido: event.target[0].value,
               
            };
    
            console.log(data) 
            //saveHelp(data)
            event.target.reset()
    
    
        }    
    return (
        <div className="Nav">
            <div id="container-friends" className="d-flex justify-content-between flex-wrap">
                <div className="nave card" >
                    <div className="card-body gustos">
                        <div className="  d-flex bd-highlight mb-3">
                            <div className="me-auto p-2 bd-highlight"> <i className=" fa-2x fas fa-paint-brush">Crear Post</i></div>
                            <a onClick={changeSave} className="enlaces_nuevos" >
                                <div className="iconos_post">
                                    <i className="fa-2x fas fa-graduation-cap"></i>
                                </div>
                            </a>

                            <a onClick={changeState} className="enlaces_nuevos" >
                                <div className="iconos_post">
                                    <i className="fa-2x fas fa-eye"></i>
                                </div>
                            </a>
                            <a onClick={changeAbil} className="enlace_nuevos" >
                                <div className="iconos_post">
                                    <i className="fa-2x fas fa-table-tennis"></i>
                                </div>
                            </a>
                        </div>

                        <div>
                           
                            
                           <form style={{width:"100%"}} onSubmit={onSubmit}>
                           <div className="icons-container d-flex justify-content-evenly align-content-center flex-wrap">
                           <img src={user.profile_photo} className="perfiPublication" alt="..."></img>
                               <input type="text" className="form-control" id="publication" placeholder=" ¿Que estas pensando?" />
                               <br></br>
                               
                               <button className="btn btn-info" >Publicar</button>
                            </div>
                            </form> 
                            
                        </div>
                        <br></br>
                        <div  className=" d-flex justify-content-around align-content-center flex-wrap">
                            <input id = "file" type="file" style ={{display: "none"}}/>                                                    
                            <i className="icon_help fa-2x fas fa-camera" style = {{cursor:"pointer"}} onClick={abrir}></i>                            
                            <i className="icon_help fa-2x fas fa-video" style = {{cursor:"pointer"}} onClick={abrir}></i>
                            <i className="icon_help fa-2x fas fa-image" style = {{cursor:"pointer"}} onClick={abrir}></i>
                            <i  onClick={ayuda} className="icon_help fa-2x fas fa-question-circle"></i>
                        </div>
                    </div>
                </div>

                {save &&
                    <div className="nave card" >
                        <Cursos />
                    </div>
                }


                {abil &&
                    <div className="nave card">
                        <AgregarHabilidad />
                    </div>
                }

                {state &&
                    <div className='card'>
                        <div className="card-body">
                            <ShowCourses />
                        </div>
                    </div>
                }

                {help &&
                    <div className="card-body">
                        <Help />
                    </div>
                }

                {(!save && !state && !abil && !help) &&
                    <>
                        <ContainerPublications />
                    </>
                }
            </div>
        </div>
    );
}

export { Publicar };