import './Nav.css';
import { useState,useEffect } from 'react';
import logo from '../img/logo tecla.jpg'
import { NavLink } from 'react-router-dom'
import Config  from '../Config/Config';
import {useLocalStorage} from "../../hooks/useLocalStorage"
import {getSearch} from '../../api/api'

function Nav() {

    const [search,searchState] = useState(false);
    const[result,resultState]=useState([]);
    const [login, loginState] = useState(false);
    const [user]= useLocalStorage("USER",{})
    const [token, saveToken, Shutdown] = useLocalStorage("TOKEN", {})
    const [searchUser, saveSearch] = useLocalStorage("BUSQUEDA", {})
    const [box,boxState] = useState(false)

    const busqueda = async (e)=>{
            //e.preventDefault()
            searchState(e.target.value)   
            let newResult = await getSearch(search)
            resultState([newResult])
            
            if(e.target.value=="")
            {
                boxState(false)
                resultState([])
            }
            else{
                boxState(true)
            }      
        }

    const limpiar=()=>{
        boxState(false)
    }

    const shutdown = () => {
        Shutdown();
    }
        
    useEffect(()=>{
        loginState(token.token ? token.token : false);
    },[])
    
   return (
    <nav onClick={limpiar} id="barraNav" className="navbar navbar-expand-md navbar-light sticky-top">
        <div className="container-fluid">
            <NavLink className="navbar-brand" id="titulo" to="/chismetecla"><img className="logo d-inline-block align-text-center" src={logo} alt="Logo"/>TeclaFriends</NavLink>
            {login && 
            <>
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
                        <li  className="nav-item">
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
                        <img src={user.profile_photo}  className="perfilUser" alt="..."></img>   
                    </div>

                    <div className="d-flex justify-content-between align-content-center flex-wrap">
                        <input onChange={busqueda} className="form-control me-2" id="inputSearch" type="search" placeholder="Buscar"
                            aria-label="Search" />
                        <i className="icon-nav fas fa-search fa-lg" id="icon-search"></i>
                        <i className="icon-nav fas fa-bell fa-lg"></i>
                        <NavLink  className="nav-link" onClick={shutdown} to="/"><i className="icon-nav fas fa-sign-out-alt fa-lg" id="icon-close"></i>  </NavLink>
                                              
                    </div>
                    {box&& 
                       <>
                        <div id="caja">                           
                           <ul>
                             {
                                result.map(r=>
                                  <li> <NavLink  onClick={()=> saveSearch(r)} className="nav-link" to="/busquedaPerfil">{r.name} {r.middle_name}</NavLink></li>
                                   )                            
                             }                               
                           </ul>      
                        </div>
                      </>
                    }

                </div>
            </div>
            </>
            }
        </div>
    </nav>
  );
}

export {Nav};