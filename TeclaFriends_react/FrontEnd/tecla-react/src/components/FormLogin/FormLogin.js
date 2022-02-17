import './FormLogin.css'
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { userLogin, userSaveData } from "../../redux/actions/login";
import { connect } from "react-redux";
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { decode } from "../../hooks/decode"
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'

const mapStateToProps = (state) => {
    return {
        token: state.loginReducer.token,
        loading: state.loginReducer.loading,
        error: state.loginReducer.error,
        loginBool: state.loginReducer.login
    };
};

function FormLogin({ token, loading, loginBool, error, userLogin, userSaveData }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()
    const [user, saveUser] = useLocalStorage("USER", {})
    const [tokens, saveToken] = useLocalStorage("TOKEN", {})

    const login = async (payload) => {

        let dataUser = {
            mail: payload.mail,
            password: payload.password,
        };
        await userLogin(dataUser);
    };


    useEffect(() => {
        try {
            saveToken(token)
            let data = decode(JSON.stringify(token).split(".")[1])
            saveUser(data)
            userSaveData(JSON.parse(data))
            navigate("/chismetecla")
        }
        catch (error) { };
    }, [loginBool])

    return (<main>
        <div className="container login">
            <div className="row">
                <div className="col-lg">
                    <form className="col" onSubmit={handleSubmit(login)}>
                        <div className="form-floating">
                            <input
                                {...register("mail", {
                                    required: true,
                                    maxLength: 30,
                                    minLength: 8,
                                }
                                )}
                                type="email" className="form-control text"
                                name="mail"
                                placeholder="user@mail.com" />
                                    <br></br>
                            {errors?.mail?.type === "required" && <p className="alert alert-danger">This field is required</p>}
                            {errors?.mail?.type === "maxLength" && <p className="alert alert-danger">This field cannot exeed 16 characters</p>}
                            {errors?.mail?.type === "minLength" && <p className="alert alert-danger">This field required almost 8</p>}

                            <label htmlFor="floatingInput mail">Correo
                                electrónico:</label><br />
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                {...register("password", {
                                    required: true,

                                }
                                )}
                                type="password" className="form-control text"
                                id="password" name="password"
                                placeholder="Password"  />
                                <br></br>
                            {errors?.password?.type === "required" && <p className="alert alert-danger">This field is required</p>}
                            <label htmlFor="floatingPassword password">Contraseña:</label>
                        </div>
                        
                        {!token &&login && (
                            <div className="text-center">
                                
                                <p className="alert alert-danger" >"usuario  y/o contraseña erroneos"</p>
                               {/* {alert("usuario  y/o contraseña erroneos")} */}  
                            </div>
                        )}
                        
                        
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