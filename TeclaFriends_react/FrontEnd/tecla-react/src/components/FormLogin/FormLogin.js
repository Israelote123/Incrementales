import './FormLogin.css'
import { useNavigate } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import { userLogin, userSaveData } from "../../redux/actions/login";
import { connect } from "react-redux";
import {useLocalStorage} from "../../hooks/useLocalStorage"
import {decode} from "../../hooks/decode"
import { useEffect } from 'react';

const mapStateToProps = (state) => {
    return {
      token: state.loginReducer.token,
      loading: state.loginReducer.loading,
      error: state.loginReducer.error,
      loginBool: state.loginReducer.login
    };
  };

function FormLogin({token, loading, loginBool, error, userLogin,userSaveData}){
    const navigate = useNavigate() 
    const [user, saveUser] = useLocalStorage("USER",{})
    const [tokens, saveToken] = useLocalStorage("TOKEN", {})

    const login = async (event) => {
        event.preventDefault();
        let dataUser = {
          mail: event.target[0].value,
          password: event.target[1].value,
        };
        const waiting = await userLogin(dataUser);
    };
    useEffect(()=>{
        try{
            saveToken(token)
            let data = decode(JSON.stringify(token).split(".")[1])
            saveUser(data)
            userSaveData(JSON.parse(data))
            navigate("/chismetecla")}
            catch (error){};
    }, [loginBool])

    return  (<main>
            <div className="container login">
                <div className="row">
                    <div className="col-lg">
                        <form className="col" onSubmit={login}>
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


export default connect(mapStateToProps, { userLogin, userSaveData })(FormLogin);