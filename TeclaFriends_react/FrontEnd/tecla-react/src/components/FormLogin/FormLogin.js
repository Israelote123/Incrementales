import './FormLogin.css'
import {NavLink} from 'react-router-dom'

function FormLogin(){
    return  (<main>
            <div className="container login">
                <div className="row">
                    <div className="col-lg">
                        <form className="col" onsubmit="event.preventDefault();">
                            <div className="form-floating">
                                <input type="email" className="form-control text"
                                    name="user_mail"
                                    placeholder="user@mail.com" />
                                <label for="floatingInput mail">Correo
                                    electrónico:</label><br />
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control text"
                                    id="password" name="user_password"
                                    placeholder="Password" />
                                <label for="floatingPassword password">Contraseña:</label>
                            </div>
                            <button className="btn btn-primary mb-3"
                                id="style-button" onclick="inicioSesion()">Iniciar
                                sesión</button>
                            <NavLink className="btn btn-primary" id="style-button3" to="/new-user">¿No tienes
                                cuenta? Registrate</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </main>)
}

export {FormLogin}