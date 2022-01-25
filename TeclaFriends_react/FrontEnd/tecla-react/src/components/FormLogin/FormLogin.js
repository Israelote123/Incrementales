import './FormLogin.css'
import { inicioSesion } from '../../api/api';
import { useNavigate } from "react-router-dom";
import {NavLink} from 'react-router-dom'

function FormLogin(){
    const navigate = useNavigate() 
    
    const obtainData = async (event) => {
        let data
        event.preventDefault();
        data = {
          mail: event.target[0].value,
          password: event.target[1].value,
        };
        let variable=event.target[0].value;
        localStorage.setItem("variable",variable);     
        navigate("/publicar")
      };

    return  (<main>
            <div className="container login">
                <div className="row">
                    <div className="col-lg">
                        <form className="col" onSubmit={obtainData}>
                            <div className="form-floating">
                                <input type="email" className="form-control text"
                                    name="user_mail"
                                    placeholder="user@mail.com" />
                                <label htmlFor="floatingInput mail">Correo
                                    electrónico:</label><br />
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control text"
                                    id="password" name="user_password"
                                    placeholder="Password" />
                                <label htmlFor="floatingPassword password">Contraseña:</label>
                            </div>
                            <button type='submit' className="btn btn-primary mb-3"
                                id="style-button" >Iniciar
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