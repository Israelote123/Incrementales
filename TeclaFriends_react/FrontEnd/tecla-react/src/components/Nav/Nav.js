import './Nav.css';
import logo from '../img/logo tecla.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import Config  from '../Config/Config';
import {useLocalStorage} from "../../hooks/useLocalStorage"
import { searchUser, searchedUser } from "../../redux/actions/search";
import { userUnlogin, userLoginCheck, userSaveData } from "../../redux/actions/login";
import {showNotifications} from "../../redux/actions/notifications"
import { connect } from "react-redux";
import {decode} from "../../hooks/decode"
import { useEffect } from 'react';


const mapStateToProps = (state) => {
    return {
        token: state.loginReducer.token,
        login: state.loginReducer.login,
        data: state.loginReducer.data,
        users: state.searchReducer.users,
        searching: state.searchReducer.searching,
        notifications: state.showNotificationsReducer.notifications,
        finish: state.showNotificationsReducer.finish,
    };
};


function Nav({login, token, userUnlogin, data, users, searching, searchedUser, searchUser, notifications,finish,showNotifications, userLoginCheck, userSaveData}) {
    const navigate = useNavigate()
    const [user, saveUser, deleteAllData] = useLocalStorage("USER", {});
    const [userToken] = useLocalStorage("TOKEN", {})
    const [search, saveSearch] = useLocalStorage("BUSQUEDA", {});
    const busqueda = async (e) => {
        e.preventDefault()
        await searchUser(e.target.value)
    }

    const unlogin = () => {
        userUnlogin()
        deleteAllData()
    }

    const clear = async (dataSearch) => {
        saveSearch(JSON.stringify(dataSearch))
        await searchedUser(dataSearch);
        document.querySelector('#inputSearch').value = "";
    }

    const traerNotificaciones = () => {
        showNotifications(data.mail)
    }

    useEffect(() => {
        traerNotificaciones()
    }, [data])

    useEffect(()=>{
        userLoginCheck(userToken)
        if(login){
            let dataCheck = decode(JSON.stringify(userToken).split(".")[1])
            userSaveData(JSON.parse(dataCheck))
            navigate("/chismetecla") 
        }
        if(!login){
            navigate("/")
            deleteAllData()
        }
    },[])

    return (
        <nav id="barraNav" className="navbar navbar-expand-md navbar-light sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" id="titulo" to="/chismetecla"><img className="logo d-inline-block align-text-center" src={logo} alt="Logo" />TeclaFriends</NavLink>
                {login && token &&
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
                                        <NavLink id='cambio' className="cambiar nav-link" to="/agregarAmigos">Descubrir amigos</NavLink>
                                    </li>
                                    
                                </ul>
                                <div id="sesionImage">
                                    <img src={data.profile_photo} className="perfilUser" alt="..."></img>
                                </div>
                                <div className="d-flex justify-content-between align-content-center flex-wrap">
                                    <input onChange={busqueda} className="form-control me-2" id="inputSearch" type="search" placeholder="Buscar"
                                        aria-label="Search" />
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        {/*<button type="button" class="btn "><i className="icon-nav fas fa-search fa-lg" id="icon-search"></i></button>*/}
                                        {notifications.length > 0 &&
                                            <button type="" className=" btn ">
                                                <div className="position-relative">
                                                    <NavLink id='cambio' className="nav-link" to="/notificaciones"><i className="icon-nav fas fa-users fa-2x"></i></NavLink>
                                                    {finish &&
                                                        <>
                                                            <span className="position-absolute top-10 start-1 translate-middle badge rounded-pill bg-danger">
                                                                {notifications.length}
                                                                <span className="visually-hidden">unread messages</span>
                                                            </span>
                                                        </>
                                                    }
                                                </div>
                                            </button>
                                        }
                                        {notifications.length == 0 &&
                                            <i className="icon-nav fas fa-users fa-2x"></i>
                                        }
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className=" fas fa-cog fa-lg"></i>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <Config />
                                        </ul>
                                    </div>
                                    <NavLink className="nav-link" onClick={unlogin} to="/"><i className="icon-nav fas fa-sign-out-alt fa-lg" id="icon-close"></i>  </NavLink>
                                </div>
                                {searching &&
                                    <>
                                        <div id="caja">
                                            <ul>
                                                {users.map(r => (
                                                    <li key={r.mail}><NavLink onClick={() => { clear(r) }} className="nav-link" to="/busquedaPerfil">{r.name} {r.middle_name}</NavLink></li>
                                                ))}
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

export default connect(mapStateToProps, { userUnlogin, searchUser, searchedUser, showNotifications, userLoginCheck, userSaveData })(Nav);
