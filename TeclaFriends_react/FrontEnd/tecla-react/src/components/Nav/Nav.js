import './Nav.css';
import logo from '../img/logo tecla.jpg'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav id="barraNav" className="navbar navbar-expand-md navbar-light sticky-top">
        <div className="container-fluid">
            <NavLink className="navbar-brand" id="titulo" to="/chismetecla"><img className="logo d-inline-block align-text-center" src={logo} alt="Logo"/>TeclaFriends</NavLink>
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
                <div id="cuerpo_barra" className="   offcanvas-body">
                    <ul className="d-inline-flex p-2 bd-highlight navbar-nav me-auto mb-2 mb-lg-0">
                        <li  className="nav-item">
                            <NavLink  className="nav-link" to="/chismetecla">ChismeTecla</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/amigos">Amigos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/publicar">Perfil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/agregarAmigos">Agregar amigos</NavLink>
                        </li>
                    </ul>
                    <div id="sesion">

                    </div>
                    <div className="d-flex justify-content-between align-content-center flex-wrap">
                        <input className="form-control me-2" id="inputSearch" type="search" placeholder="Buscar"
                            aria-label="Search" />
                        <i className="icon-nav fas fa-search fa-lg" id="icon-search"></i>
                        <i className="icon-nav fas fa-bell fa-lg"></i>
                        <i className="icon-nav fas fa-sign-out-alt fa-lg" id="icon-close"></i>
                    </div>
                    <div id="caja">
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
}

export {Nav};