import './Publicar.css';
import { Cursos } from '../Cursos/Cursos';
import { ShowCourses } from '../ShowCourses/ShowCourses';

function Publicar() {
    return (
        <div className="Nav">
            <div id="container-friends" className="d-flex justify-content-between flex-wrap">
                <div className="nave card" >
                    <div className="card-body">
                        <div className="d-flex bd-highlight mb-3">
                            <div className="me-auto p-2 bd-highlight"> <i className=" fa-2x fas fa-paint-brush">Crear Post</i></div>
                            <a className="enlace" data-bs-toggle="collapse" href="#collapseCourse" role="button"
                                aria-expanded="false" aria-controls="collapseExample">
                                <div className="circle-icon">
                                    <i className="fa-2x fas fa-graduation-cap"></i>
                                    
                                </div>
                            </a>
                            <a className="enlace" data-bs-toggle="collapse" href="#collapseShowcourse" role="button"
                                aria-expanded="false" aria-controls="collapseExample">
                                <div className="circle-icon">
                                <i className="fa-2x fas fa-eye"></i>
                                    
                                </div>
                            </a>
                            
                            
                        </div>
                        <div className="icons-container d-flex justify-content-evenly align-content-center flex-wrap">
                        <i className="fa-2x fas fa-user-astronaut"></i>
                            <input type="text" className="form-control" id="publication" placeholder=" ¿Que estas pensando?" />
                        </div>
                        <div className=" d-flex justify-content-around align-content-center flex-wrap">
                            <i className=" fa-2x fas fa-camera"></i>
                            <i className="fa-2x fas fa-video"></i>
                            <i className="fa-2x fas fa-image"></i>
                        </div>
                        <div className="list-group-item"><div className="collapse" id="collapseCourse">
                            <div className="gustos card card-body">
                                <Cursos />
                            </div>
                        </div>
                        </div>

                        <div className="list-group-item"><div className="collapse" id="collapseShowcourse">
                            <div className="gustos card card-body">
                                <ShowCourses />
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
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
                            <i className="perfil fa-2x fas fa-thumbs-up"></i>
                            <i className="perfil fa-2x far fa-comment"></i>
                            <i className="perfil fa-2x fab fa-gratipay"></i>
                            <i className="perfil fa-2x fas fa-heart-broken"></i>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export { Publicar };