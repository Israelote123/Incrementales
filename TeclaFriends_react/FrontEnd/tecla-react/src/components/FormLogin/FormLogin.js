import './FormLogin.css'
import { inicioSesion } from '../../api/api';
import { useNavigate } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import {useLocalStorage} from "../../hooks/useLocalStorage"
import {useState} from 'react'

function FormLogin(){
    const navigate = useNavigate() 
    
    const [loading,setLoading] = useState(false)
    const [token, saveToken] = useLocalStorage("TOKEN", {})
    const [user, saveUser]= useLocalStorage("USER",{}) 
    
    const decode = str => {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(window.atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    const obtainData = async (event) => {
        event.preventDefault();
        let data = {
          mail: event.target[0].value,
          password: event.target[1].value,
        };
        setLoading(true)
        let login = await inicioSesion(data)
        console.log(login)
        if (login){
            setLoading(false)

            if(login.token){
                saveToken(login)
                let userData = decode(login.token.split(".")[1])
                console.log(userData)
                saveUser(userData)
                navigate("/publicar")
            }
        }
      };

    return  (<main>
            <div className="container login">
                <div className="row">
                    <div className="col-lg">
                        <form className="col" onSubmit={obtainData}>
                            <div className="form-floating">
                                <input type="email" className="form-control text"
                                    name="user_mail"
                                    placeholder="user@mail.com" required/>
                                <label htmlFor="floatingInput mail">Correo
                                    electrónico:</label><br />
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control text"
                                    id="password" name="user_password"
                                    placeholder="Password" required/>
                                <label htmlFor="floatingPassword password">Contraseña:</label>
                            </div>
                            {!loading && (
                                <>
                                <button type='submit' className="btn btn-primary mb-3" id="style-button" >Iniciar sesión</button>
                                <NavLink className="btn btn-primary" id="style-button3" to="/new-user">¿No tienes cuenta? Registrate</NavLink>
                                </>
                            )}
                            {loading && (
                                <div className="text-center">
                                    <div className="spinner-grow text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </main>)
}

export {FormLogin}