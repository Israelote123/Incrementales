import "./Nav.css";
import logo from "../img/logo tecla.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import Config from "../Config/Config";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { searchUser, searchedUser } from "../../redux/actions/search";
import { userUnlogin, userLoginCheck, userSaveData } from "../../redux/actions/login";
import { showNotifications } from "../../redux/actions/notifications";
import { connect } from "react-redux";
import { decode } from "../../hooks/decode";
import { useEffect } from "react";

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

function Nav({login, token, userUnlogin, data, users, searching, searchedUser, searchUser, notifications, finish, showNotifications, userLoginCheck, userSaveData,}){
    const navigate = useNavigate();
    const [user, saveUser, deleteAllData] = useLocalStorage("USER", {});
    const [userToken] = useLocalStorage("TOKEN", {});
    const [search, saveSearch] = useLocalStorage("BUSQUEDA", {});
    const busqueda = async (e) => {
        e.preventDefault();
        await searchUser(e.target.value);
    };

    const unlogin = () => {
        userUnlogin();
        deleteAllData();
        window.location.href = "/";
    };

    const clear = async (dataSearch) => {
        saveSearch(JSON.stringify(dataSearch));
        await searchedUser(dataSearch);
        document.querySelector("#inputSearch").value = "";
    };

    const traerNotificaciones = () => {
        showNotifications(data.mail);
    };

    useEffect(() => {
        traerNotificaciones();
    }, [data]);

    useEffect(() => {
        userLoginCheck(userToken);
        if (login) {
        let dataCheck = decode(JSON.stringify(userToken).split(".")[1]);
        userSaveData(JSON.parse(dataCheck));
        navigate("/chismetecla");
        }
        if (!login) {
        navigate("/");
        deleteAllData();
        }
    }, []);

    return (
        <nav id="barraNav" className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand d-none d-lg-block" to="/chismetecla" id="titulo">
                    <img className="logo d-inline-block align-text-center" src={logo} alt="Logo"/>
                    <span className="align-middle">TeclaFriends</span>
                </NavLink>
                <NavLink className="navbar-brand d-lg-none cell" to="/chismetecla" id="titulo">
                    <img className="logo d-inline-block align-text-center" src={logo} alt="Logo"/>
                </NavLink>
                {login && token && (
                    <>
                        <div className="d-flex justify-content-between align-content-center flex-wrap navbar-nav me-auto mb-2 mb-lg-0" id="navbarNav">
                            <NavLink className="nav-link cambio align-middle d-none d-lg-block" to="/chismetecla">ChismeTecla</NavLink>
                            <NavLink className="nav-link cambio align-middle d-none d-lg-block" to="/amigos">Amigos</NavLink>
                            <NavLink className="nav-link cambio align-middle d-none d-lg-block" to="/perfil">Perfil</NavLink>
                            <NavLink className="nav-link cambio align-middle d-none d-lg-block" to="/agregarAmigos">Descubrir amigos</NavLink>
                        </div>
                        <div className="nav justify-content-center nav-center" id="navbarNav">
                            <NavLink className="nav-link cambio d-lg-none cell" to="/chismetecla">
                                <i className="icon-nav fas fa-solid fa-book-open"></i>
                            </NavLink>

                            <NavLink className="nav-link cambio d-lg-none cell" to="/amigos">
                                <i className="icon-nav fas fa-solid fa-address-book"></i>
                            </NavLink>

                            <NavLink className="nav-link cambio d-lg-none cell" to="/agregarAmigos">
                                <i className="icon-nav fas fa-solid fa-user-plus"></i>
                            </NavLink>

                            <NavLink className="nav-link cambio d-lg-none cell" to="/perfil">
                                <i className="icon-nav fas fa-solid fa-address-card"></i>
                            </NavLink>

                            {notifications.length > 0 && (
                                <button type="" className=" btn ">
                                    <div className="position-relative">
                                        <NavLink className="nav-link d-lg-none cell" to="/notificaciones">
                                            <i className="d-lg-none icon-nav fas fa-users"></i>
                                        </NavLink>
                                        {finish && (
                                            <>
                                                <span className="position-absolute top-10 start-1 translate-middle badge rounded-pill bg-danger">
                                                {notifications.length}
                                                <span className="visually-hidden">
                                                    unread messages
                                                </span>
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </button>
                            )}
                            {notifications.length == 0 && (
                                <i className="d-lg-none icon-nav fas fa-users"></i>
                            )}
                            <NavLink className="nav-link d-lg-none cell" onClick={unlogin} to="/">
                                <i className="icon-nav fas fa-sign-out-alt" id="icon-close"></i>{" "}
                            </NavLink>
                        </div>
                        <div className="d-flex justify-content-between align-content-center flex-wrap">
                            <div id="sesionImage" className="d-none d-lg-block">
                                <img src={data.profile_photo} className="perfilUser" alt="imagen perfil"/>
                            </div>
                            <input onChange={busqueda} className="form-control me-2 d-none d-lg-block" id="inputSearch" type="search" placeholder="Buscar" aria-label="Search" />
                            <div className="btn-group" role="group" aria-label="Basic example">
                            {notifications.length > 0 && (
                                <button type="" className=" btn ">
                                    <div className="position-relative">
                                    <NavLink
                                        className="nav-link d-none d-lg-block"
                                        to="/notificaciones"
                                    >
                                        <i className="d-none d-lg-block icon-nav fas fa-users fa-2x"></i>
                                    </NavLink>
                                    {finish && (
                                        <>
                                        <span className="position-absolute top-10 start-1 translate-middle badge rounded-pill bg-danger">
                                            {notifications.length}
                                            <span className="visually-hidden">
                                            unread messages
                                            </span>
                                        </span>
                                        </>
                                    )}
                                    </div>
                                </button>
                            )}
                            {notifications.length == 0 && (
                                <i className="d-none d-lg-block icon-nav fas fa-users fa-2x"></i>
                            )}
                            </div>
                            <div className="dropdown d-none d-lg-block">
                                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className=" fas fa-cog fa-lg"></i>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <Config />
                                </ul>
                            </div>
                            <NavLink className="nav-link d-none d-lg-block" onClick={unlogin} to="/">
                                <i className="icon-nav fas fa-sign-out-alt fa-lg" id="icon-close"></i>
                            </NavLink>

                            {searching && (
                                <>
                                    <div id="caja">
                                        <ul>
                                        {users.map((r) => (
                                            <li key={r.mail}>
                                            <NavLink
                                                onClick={() => {
                                                clear(r);
                                                }}
                                                className="nav-link"
                                                to="/busquedaPerfil"
                                            >
                                                {r.name} {r.middle_name}
                                            </NavLink>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
}

export default connect(mapStateToProps, {userUnlogin, searchUser, searchedUser, showNotifications, userLoginCheck, userSaveData,})(Nav);
