import adame from './adame.jpg'
import felicidad from './felicidad.jpg'
import onix from './onix.jpg'
import calamardo from './calamardo.jpg'
import arenita from './arenita.jpg'
import bob from './bobe.jpg'
import './ContainerPublications.css'
import { useLocalStorage } from "../../hooks/useLocalStorage"
import {showAllPublications} from '../../redux/actions/allPublications'
import { useEffect } from 'react';

import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {

        data: state.loginReducer.data,
        error: state.allPublicationReducer.error,
        publicationAll: state.allPublicationReducer.publicationAll,
        finish: state.allPublicationReducer.finish,

    };
};


function ContainerPublications({ showAllPublications,data,error,publicationAll,finish }) {
    const [user] = useLocalStorage("USER", {});


    const getpublications = async() => {
        showAllPublications()
    }


    useEffect(() => {
        getpublications();
    }, [])


  
    

    return (
        < >
        {finish &&
          <>
            {
              publicationAll.slice(0).reverse().map(r =>
                <div  key={r.id}  className="card" style={{ background: "turquoise" }}>
                    <div className="card-body">
                        <div className="d-flex bd-highlight mb-3">
                            <div className="p-2 bd-highlight">  <img src={r.profile_photo} className="perfiPublication" alt="..."></img>
                            </div>
                            <div className="p-2 bd-highlight"> <h4>{r.name} {r.middle_name} </h4></div>
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
                            <h5 className="card-text">{r.content}</h5>
                        </div>


                    </div>

                    {r.photos_post &&
                            <div className=''  >
                               <img src={r.photos_post} className="imagePublications" alt="..." />
                            </div>
                       }

                    <br></br>


                    <ul style={{ background: "turquoise" }} className="list-group list-group-flush">
                        <br></br>

                        <li style={{ background: "turquoise" }} className="list-group-item"><div className=" row">

                            <div className="col-3 ">
                                <div className="position-relative">
                                    <i className="icon_publication size-icon fas fa-thumbs-up"></i>
                                    <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                                        {r.likes}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="position-relative">
                                    <i className="icon_publication perfiles size-icon fas fa-comments"></i>
                                    <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                                        {r.comments}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="position-relative">
                                    <i className="icon_publication perfiles size-icon fab fa-gratipay"></i>
                                    <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                                        {r.heart}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="position-relative">
                                    <i className="icon_publication perfiles size-icon fas fa-heart-broken"></i>
                                    <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                                        {r.break_heart}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                            </div>
                        </div></li>
                    </ul>
                </div>

            )
            }

           </>
          }    
        </>
    );


}

export default connect(mapStateToProps, {showAllPublications})(ContainerPublications);
