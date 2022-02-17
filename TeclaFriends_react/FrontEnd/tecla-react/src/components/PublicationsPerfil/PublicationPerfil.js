import adame from './pedillos.jpg'
import dupla from './dupla.jpg'
import some from './some.jpg'
import demo from './demo.jpg'
import calamardo from './calamardo.jpg'
import bob from './bobe.jpg'
import './PublicationPerfil.css'
import {useLocalStorage} from "../../hooks/useLocalStorage"
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {       
  
       
    };
};


function PublicationsPerfil() {
    const [user] = useLocalStorage("USER", {});
    let mensages = 80;

    let informacion = 
         [
        
            {
                foto: user.profile_photo,
                contenido: "Para celebrar el Quincuagésimo Aniversario de El Padrino, la obra maestra del ganador del Premio de la Academia®, el director Francis Ford Coppola, Paramount Home Entertainment Latinoamérica anuncia el lanzamiento en 4K Ultra HD en descarga digital el 22 de marzo de 2021. Las tres películas de la seria han sido meticulosamente restauradas bajo la dirección de Coppola con gran cantidad de material adicional en plataformas seleccionadas. #ElPadrino50",
                name: user.name,
                description: "jajajaja",
                image:adame
            }
            ,
        
        
            {
                foto: user.profile_photo,
                contenido: "El pleito callejero en el que se vio involucrado Alfredo Adame sigue siendo un tema de conversación. En el video que ayer se volvió tendencia se observa al actor peleando con una mujer y un hombre en plena calle de la Ciudad de México. El que no dejó la oportunidad de reaccionar al conflicto fue Carlos Trejo, 'archienemigo' del ex conductor de Hoy, y por si fuera poco anunció que ya está planeando su tan esperada pelea.",
                name: user.name,
                description: "Mi dupla en la demo",
                image:dupla
            },
            {
                    foto: user.profile_photo,
                    contenido: "El pleito callejero en el que se vio involucrado Alfredo Adame sigue siendo un tema de conversación. En el video que ayer se volvió tendencia se observa al actor peleando con una mujer y un hombre en plena calle de la Ciudad de México. El que no dejó la oportunidad de reaccionar al conflicto fue Carlos Trejo, 'archienemigo' del ex conductor de Hoy, y por si fuera poco anunció que ya está planeando su tan esperada pelea.",
                    name: user.name,
                    description: "XD",
                    image:demo
            },
            {
                    foto: user.profile_photo,
                    contenido: "El pleito callejero en el que se vio involucrado Alfredo Adame sigue siendo un tema de conversación. En el video que ayer se volvió tendencia se observa al actor peleando con una mujer y un hombre en plena calle de la Ciudad de México. El que no dejó la oportunidad de reaccionar al conflicto fue Carlos Trejo, 'archienemigo' del ex conductor de Hoy, y por si fuera poco anunció que ya está planeando su tan esperada pelea.",
                    name: user.name,
                    description: "El entrevistador",
                    image:some
            }

         
        ]
    
    
    return (
        <div>
        
        {
            informacion.map(r =>
                <div className="card" style={{ width: "100%", background: "turquoise" }}>
                    <div className="card-body">
                        <div className="d-flex bd-highlight mb-3">
                            <div className="p-2 bd-highlight">  <img src={r.foto} className="perfiPublication" alt="..."></img>
                            </div>
                            <div className="p-2 bd-highlight"> <h4>{r.name} </h4></div>
                            <div className="dropdown ms-auto p-2 bd-highlight">
                                <a className="btn btn-light " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-angle-double-down"></i>
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Edit</a></li>
                                    <li><a className="dropdown-item" href="#">Delete</a></li>
                                    <li><a className="dropdown-item" href="#">Hide</a></li>
                                    <li><a className="dropdown-item" href="#">Report</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='d-flex justify-content-start'>
                            <h5 className="card-text">{r.description}</h5>
                        </div>


                    </div>

                    <div className=''  >
                        <img src={r.image} className="imagePublications" alt="..." />
                    </div>

                    <br></br>


                    <ul style={{ background: "turquoise" }} className="list-group list-group-flush">
                        <br></br>

                        <li style={{ background: "turquoise" }} className="list-group-item"><div className=" row">

                            <div className="col-3 ">
                                <div className="position-relative">
                                    <i className="icon_publication size-icon fas fa-thumbs-up"></i>
                                    <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                                        {mensages}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="position-relative">
                                    <i className="icon_publication perfiles size-icon fas fa-comments"></i>
                                    <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                                        {mensages}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="position-relative">
                                    <i className="icon_publication perfiles size-icon fab fa-gratipay"></i>
                                    <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                                        {mensages}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="position-relative">
                                    <i className="icon_publication perfiles size-icon fas fa-heart-broken"></i>
                                    <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                                        {mensages}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                            </div>
                        </div></li>
                    </ul>
                </div>

            )
        }
    </div>
    );
  

}

export default connect(mapStateToProps, {  })(PublicationsPerfil);
