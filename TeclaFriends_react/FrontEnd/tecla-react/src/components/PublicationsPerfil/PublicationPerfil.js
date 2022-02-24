import adame from './pedillos.jpg'
import dupla from './dupla.jpg'
import some from './some.jpg'
import demo from './demo.jpg'
import calamardo from './calamardo.jpg'
import bob from './bobe.jpg'
import './PublicationPerfil.css'
import { showUserPublications } from '../../redux/actions/userPublications'
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useEffect } from 'react';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        error: state.userPublicationReducer.error,
        publicationUser: state.userPublicationReducer.publicationUser,
        finish: state.userPublicationReducer.finish,

        
    };
};


function PublicationsPerfil({ showUserPublications,error,publicationUser,finish }) {
    const [user] = useLocalStorage("USER", {});
    let mensages = 80;


    const getpublications = async() => {
        showUserPublications(user.mail)
    }


    useEffect(() => {
        getpublications();
    }, [])


  


    return (
      <div >
        {finish &&
          <>
            {
              publicationUser.slice(0).reverse().map(r =>
                    <div className="card" style={{ width: "100%", background: "turquoise" }}>

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
        </div>
    );


}

export default connect(mapStateToProps, { showUserPublications })(PublicationsPerfil);
