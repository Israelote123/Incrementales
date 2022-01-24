import './Publicar.css';
import { useState } from 'react';
import { Cursos } from '../Cursos/Cursos';
import { ShowCourses } from '../ShowCourses/ShowCourses';
import { AgregarHabilidad } from "../AgregarHabilidad/AgregarHabilidad";
import {Help} from "../Help/Help"

function Publicar() {
    const [save, setSave] = useState(false);
    const [state, setState] = useState(false);
    const [abil, setAbil] = useState(false);
    const [help,setHelp ] = useState(false);
    const changeSave=()=>{
             setSave(!save)
             console.log(save)
    }
    const changeState=()=>{
        setState(!state)
        console.log(state)
   }
   const changeAbil=()=>{
    setAbil(!abil)
    
}
const ayuda=()=>{
    setHelp(!help)    
}

    return (
        <div className="Nav">
            <div id="container-friends" className="d-flex justify-content-between flex-wrap">
                <div className="nave card" >
                    <div className="card-body gustos">
                        <div className="  d-flex bd-highlight mb-3">
                            <div className="me-auto p-2 bd-highlight"> <i className=" fa-2x fas fa-paint-brush">Crear Post</i></div>
                            <a  onClick={changeSave} className="enlaces_nuevos" >
                                <div className="iconos_post">
                                    <i className="fa-2x fas fa-graduation-cap"></i>                                    
                                </div>
                            </a>

                            <a  onClick={changeState}  className="enlaces_nuevos" >
                                <div className="iconos_post">
                                  <i className="fa-2x fas fa-eye"></i>                                    
                                </div>
                            </a>   
                            <a  onClick={changeAbil}  className="enlace_nuevos" >
                                <div className="iconos_post">
                                <i className="fa-2x fas fa-table-tennis"></i>                                  
                                </div>
                            </a>                          
                        </div>

                        <div className="icons-container d-flex justify-content-evenly align-content-center flex-wrap">
                        <i className="fa-2x fas fa-user-astronaut"></i>
                            <input type="text" className="form-control" id="publication" placeholder=" ¿Que estas pensando?" />
                        </div>
                        <div className=" d-flex justify-content-around align-content-center flex-wrap">
                            <i className="icon_help fa-2x fas fa-camera"></i>
                            <i className="icon_help fa-2x fas fa-video"></i>
                            <i className="icon_help fa-2x fas fa-image"></i>
                            <i onClick={ayuda}  className="icon_help fa-2x fas fa-question-circle"></i>
                        </div>
                        </div>
                        </div>

                     {save&&
                       <div className="nave card" >
                          <Cursos />
                        </div> 
                      } 


                      {abil&&
                          <div className="nave card">
                                  <AgregarHabilidad />
                          </div>
                           
                        
                      } 

                      {state&&
                         <div className='card'>
                         <div className="card-body">
                                <ShowCourses />
                            </div>
                            </div>
                      }

                      {help&&
                            <div className="card-body">
                                  <Help />
                              </div>
                      }  
                       
              {(!save && !state&&!abil&&!help)  && 
                <div className="nave card" >
                    <div className="card-body">
                        <div className="d-flex justify-content-start align-content-center flex-wrap">
                        <i className="fa-2x fas fa-user-astronaut"></i>
                            <p>Ivan Rodriguez</p>
                        </div>
                        <div className="icons-container d-flex justify-content-evenly align-content-center flex-wrap">
                            <p>Para celebrar el Quincuagésimo Aniversario de El Padrino, la obra maestra del ganador del Premio de la Academia®, el director Francis Ford Coppola, Paramount Home Entertainment Latinoamérica anuncia el lanzamiento en 4K Ultra HD en descarga digital el 22 de marzo de 2021.
                                Las tres películas de la seria han sido meticulosamente restauradas bajo la dirección de Coppola con gran cantidad de material adicional en plataformas seleccionadas. #ElPadrino50</p>
                        </div>
                        <div className=" d-flex justify-content-start align-content-center flex-wrap">
                            <i className="icon_help perfiles fa-2x fas fa-thumbs-up"></i>
                            <i className="icon_help perfiles fa-2x far fa-comment"></i>
                            <i className="icon_help perfiles fa-2x fab fa-gratipay"></i>
                            <i className="icon_help perfiles fa-2x fas fa-heart-broken"></i>
                            
                        </div>
                    </div>
                </div>
              }
            </div>
        </div>
    );
}

export { Publicar };