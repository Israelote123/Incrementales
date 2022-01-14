import './Nav.css';
import logo from '../img/logo tecla.jpg'

function Nav() {
  return (
    <nav id="barraNav" className="navbar navbar-expand-md navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand d-inline-block align-text-center" id="titulo" href="..../public/index.html"><img className="logo" src={logo} alt="Logo" />TeclaFriends</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasMd"
        aria-controls="navbarOffcanvasMd" id="hamburguesa">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasMd"
        aria-labelledby="navbarOffcanvasMdLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">TeclaFriends</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div id="cuerpo_barra" className="offcanvas-body">
          <ul className="d-inline-flex p-2 bd-highlight navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fuente" aria-current="page" href="./index.html">ChismeTecla</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fuente" href="../amigos/index.html">Amigos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fuente" href="../userPage/index.html">Perfil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fuente" href="../agregar_amigos/index.html">Agregar amigos</a>
            </li>
          </ul>
           <div id="sesion">
          </div>
          <form className="ctn-bars-search d-flex">
            <input className="form-control me-2" id="inputSearch" type="search" placeholder="Buscar" aria-label="Search" />
            <i className="fas fa-search" id="icon-search"></i>
          </form>
          <div id="caja">
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
}

export {Nav};