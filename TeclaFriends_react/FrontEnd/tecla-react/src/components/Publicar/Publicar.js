import './Publicar.css';
import { useState } from 'react';
import Cursos from '../Cursos/Cursos';
import ShowCourses from '../ShowCourses/ShowCourses';
import AgregarHabilidad from "../AgregarHabilidad/AgregarHabilidad";
import Help from "../Help/Help"
import ContainerPublications from '../ContainerPublications/ContainerPublications';
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { pushPublications } from '../../api/api'
import userPreview from './felicidad.jpg'

function Publicar() {
    const [preview, setPreview] = useState()
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

    const onChange = () => {
        var photo = document.querySelector("#file");
        const objectURL = URL.createObjectURL(photo.files[0]);
        setPreview(objectURL);

        if ((document.getElementById("file").value != "") || (document.getElementById("publication").value != ""))
            document.getElementById("publicar").disabled = false;
        else document.getElementById("publicar").disabled = true;
    }

    const onChanged = () => {

        if ((document.getElementById("file").value != "") || (document.getElementById("publication").value != ""))
            document.getElementById("publicar").disabled = false;
        else document.getElementById("publicar").disabled = true;
    }








    const onSubmit = (event) => {
        event.preventDefault()

        let data = {
            content: event.target[0].value,
            photos_post: "",
            likes: 0,
            comments: 0,
            heart: 0,
            break_heart: 0,
            mail: user.mail,
        };

        //enviar publicacion a la base de datos
        pushPublications(data)
        event.target.reset()
    }
    return (
        <div className="Nav">
            <div id="container-friends" className="d-flex justify-content-between flex-wrap">
                <div className="nave card" >
                    <div className="card-body gustos">
                        <div className="  d-flex bd-highlight mb-3">
                            <div className="me-auto p-2 bd-highlight">
                                <i className="size-icon fas fa-paint-brush d-none d-md-block">Crear Post</i>
                                <i className="size-icon fas fa-paint-brush d-md-none"></i>
                            </div>
                            <a onClick={changeSave} className="enlaces_nuevos" >
                                <div className="iconos_post">
                                    <i className="size-icon fas fa-graduation-cap"></i>
                                </div>
                            </a>
                            <a onClick={changeState} className="enlaces_nuevos" >
                                <div className="iconos_post">
                                    <i className="size-icon fas fa-eye"></i>
                                </div>
                            </a>
                            <a onClick={changeAbil} className="enlace_nuevos" >
                                <div className="iconos_post">
                                    <i className="size-icon fas fa-table-tennis"></i>
                                </div>
                            </a>
                        </div>

                        <div>
                            <form style={{ width: "100%" }} onSubmit={onSubmit}>
                                <div className="icons-container d-flex justify-content-evenly align-content-center flex-wrap">
                                    <img src={user.profile_photo} className="perfiPublication" alt="..."></img>
                                    <input style={{ width: "70%" }}  type="text" className="form-control" id="publication" placeholder=" ¿Que estas pensando?" onChange={onChanged} />
                                    <br></br>
                                    <button id="publicar" className="btn btn-info" disabled >Publicar</button>
                                </div>
                                    <input type="file" id="file" name="publishPhoto" className="form-control"
                                        accept="image/*" onChange={onChange} style={{ display: "none" }} />

                                    <div>
                                        {preview &&
                                            <>
                                                <br />
                                                <img src={preview} id="publishPhoto" alt="foto_default" style={{ width: "80%" }} />
                                                <br />
                                            </>
                                        }
                                    </div>

                            </form>
                        </div>

                        <br></br>
                        <div className=" d-flex justify-content-around align-content-center flex-wrap">
                            <i className="icon_help size-icon fas fa-camera" style={{ cursor: "pointer" }} onClick={abrir}></i>
                            <i className="icon_help size-icon fas fa-video" style={{ cursor: "pointer" }} onClick={abrir}></i>
                            <i className="icon_help size-icon fas fa-image" style={{ cursor: "pointer" }} onClick={abrir}></i>
                            <i onClick={ayuda} className="icon_help size-icon fas fa-question-circle"></i>
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
                    <div className='nave card'>
                        <div className="card-body">
                            <ShowCourses />
                        </div>
                    </div>
                }

                {help &&
                    <div className="nave card">
                        <Help />
                    </div>
                }

                {(!save && !state && !abil && !help) &&

                    <div className="nave ">
                        <ContainerPublications />
                    </div>
                }
            </div>
        </div>
    );
}

export { Publicar };