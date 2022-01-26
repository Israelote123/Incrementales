import './Nav.css';
import { getSearch } from '../../api/api'
import { bienvenida } from '../../api/api'
import { useState, useEffect } from 'react';
import logo from '../img/logo tecla.jpg'
import { NavLink } from 'react-router-dom'
import { Config } from '../Config/Config';

function Nav({ box, boxState }) {
    let variable = localStorage.getItem("variable");
    const [search, searchState] = useState(false);
    const [result, resultState] = useState([]);

    const [photo, photoState] = useState([]);

    const enviar_variable = (mail) => {
        localStorage.setItem("variable2", mail);
        console.log(mail)
    }


    const welcome = async () => {
        let newJson = await bienvenida(variable)
        let wel = await newJson.json()
        photoState(photo[0] = wel)

    }

    useEffect(() => {
        welcome();
    }, [])


    const busqueda = async (e) => {
        //e.preventDefault()
        searchState(e.target.value)
        let newResult = await getSearch(search)
        let resultJSON = await newResult.json()
        resultState(result[0] = resultJSON)

        if (e.target.value == "") {
            boxState(false)
        }
        else {
            boxState(true)
        }
    }

    const limpiar = () => {
        boxState(false)
    }



    return (
        <nav onClick={limpiar} id="barraNav" className="navbar navbar-expand-md navbar-light sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" id="titulo" to="/chismetecla"><img className="logo d-inline-block align-text-center" src={logo} alt="Logo" />TeclaFriends</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasMd"
                    aria-controls="navbarOffcanvasMd" id="hamburguesa">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasMd"
                    aria-labelledby="navbarOffcanvasMdLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">TeclaFriends</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div id="cuerpo_barra" className="offcanvas-body">
                        <ul className="d-inline-flex p-2 bd-highlight navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink id='cambio' className="nav-link" to="/chismetecla">ChismeTecla</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id='cambio' className="nav-link" to="/amigos">Amigos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id='cambio' className="nav-link" to="/perfil">Perfil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id='cambio' className="cambiar nav-link" to="/agregarAmigos">Agregar amigos</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink id='cambio' className="nav-link" to="/publicar">Publicar</NavLink>
                            </li>
                        </ul>

                        <div id="sesionImage">
                            {photo.map(r =>
                                <img src={r.profile_photo} className="perfilUser" alt="..."></img>
                            )
                            }
                        </div>

                        <div className="d-flex justify-content-around align-content-center flex-wrap">
                            <input onChange={busqueda} className="form-control me-2" id="inputSearch" type="search" placeholder="Buscar"
                                aria-label="Search" />
                            <i className="icon-nav fas fa-search fa-lg" id="icon-search"></i>
                            <i className="icon-nav fas fa-bell fa-lg"></i>
                            {/*<NavLink  className="icon-nav nav-link" to="/configuracion"><i className=" fas fa-cog fa-lg"></i>  </NavLink>    
                          */}
                            
                            
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className=" fas fa-cog fa-lg"></i> 
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <Config/>
                                </ul>
                            </div>

                            <NavLink className="icon-nav nav-link" to="/"><i className=" fas fa-sign-out-alt fa-lg" id="icon-close"></i>  </NavLink>

                        </div>
                        {box &&
                            <>
                                <div id="caja">
                                    <ul>
                                        {
                                            result.map(r =>
                                                <li> <NavLink onClick={(mail) => enviar_variable(r.mail)} className="nav-link" to="/busquedaPerfil">{r.name} {r.middle_name}</NavLink></li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </div>
        </nav>
    );
}

export { Nav };