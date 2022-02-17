import './FormRegister.css'
import userPreview from '../img/default.png'
import {registers} from '../../api/api'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import{useForm} from 'react-hook-form'

function FormRegister(){
    
    const {
      register,
      handleSubmit,
      watch,
      formState:{errors},
      } = useForm()

    const registerSucceed = useNavigate()
    const [preview, setPreview] = useState(userPreview)

    const onChange = () => {
        var photo = document.querySelector("#profilePhoto");
        const objectURL = URL.createObjectURL(photo.files[0]);
        setPreview(objectURL);
    }

    const newRegister = (payload) => {
        //event.preventDefault();
        //register(event.target)
        registers(payload)
        registerSucceed('/')
    }

    return  (
        <main>
            <div className="container register">
                <form className="row g-3" id="registerForm"
                onSubmit={handleSubmit(newRegister)}>
                    
                    <div className="col-12">
                        <img src={preview} id="userPhoto" alt="foto_default" /> <br />
                        <input type="file" id="profilePhoto" name="userPhoto"
                        className="form-control" accept="image/*" onChange={onChange}/>
                        <label htmlFor="profilePhoto" className="textProfilePhoto">Foto de perfil</label>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="email">Correo electronico:</label>
                        <input 
                         {...register("mail",{
                            required:true,
                            maxLength:30,
                            minLength:8,   
                        } 
                        )}
                        type="mail" id="email" name="mail"
                        placeholder="user@mail.com" className="form-control personalizacion" />
                           {errors?.mail?.type==="required" && <p className="alert alert-danger">This field is required</p>}
                          {errors?.mail?.type==="maxLength" && <p className="alert alert-danger">This field cannot exeed 16 characters</p>}
                          {errors?.mail?.type==="minLength" && <p className="alert alert-danger">This field required almost 8</p>}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="name">Nombre:</label>
                        <input 
                        {...register("nameUser",{
                            required:true,
                        } 
                        )}
                        type="text" id="name" name="nameUser" placeholder="José"
                        className="form-control personalizacion" />
                        {errors?.nameUser?.type==="required" && <p className="alert alert-danger">This field is required</p>}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="middleName">Apellido paterno:</label>
                        <input 
                          {...register("middleNameUser",{
                            required:true,
                        } 
                        )}
                        type="text" id="middleName" name="middleNameUser"
                        placeholder="Martinez" className="form-control personalizacion"/>
                        {errors?.middleNameUser?.type==="required" && <p className="alert alert-danger">This field is required</p>}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="lastName">Apellido materno:</label>
                        <input
                          {...register("lastNameUser",{
                            required:true,
                        } 
                        )}
                        type="text" id="lastName" name="lastNameUser"
                        placeholder="Suarez" className="form-control personalizacion"/>
                        {errors?.lastNameUser?.type==="required" && <p className="alert alert-danger">This field is required</p>}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="country">Pais:</label>
                        <input 
                          {...register("userCountry",{
                            required:true,
                        } 
                        )}
                        type="text" id="country" name="userCountry"
                        placeholder="México" className="form-control personalizacion"/>
                        {errors?.userCountry?.type==="required" && <p className="alert alert-danger">This field is required</p>}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="direction">Ciudad:</label>
                        <input 
                         {...register("userDirection",{
                            required:true,
                        } 
                        )}
                        type="text" id="direction" name="userDirection"
                        placeholder="Cd. de México" className="form-control personalizacion" />
                         {errors?.userDirection?.type==="required" && <p className="alert alert-danger">This field is required</p>}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="linkedin">Link de perfil LinkedIn:</label>
                        <input 
                         {...register("userLinkedIn",{
                         
                        } 
                        )}
                        type="tel" id="linkedin" name="userLinkedIn"
                        className="form-control personalizacion" />
                        
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="studies">Estudios:</label>
                        <input 
                         {...register("userStudies",{
                           
                        } 
                        )}
                        type="text" id="studies" name="userStudies"
                        placeholder="Memes" className="form-control personalizacion" /> 
                         
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="lenguages">Lenguajes dominados:</label>
                        <input 
                         {...register("userLenguages",{
                         
                        } 
                        )}
                        type="text" id="lenguages" name="userLenguages"
                        placeholder="Español" className="form-control personalizacion"/>
                         
                    </div>



                    <div className="col-md-6">
                        <label htmlFor="birth">Fecha de nacimiento:</label>
                        <input 
                         {...register("userBirth",{
                            required:true,
                        } 
                        )}
                        type="date" id="birth" name="userBirth" className="form-control
                        personalizacion" />
                         {errors?.userBirth?.type==="required" && <p className="alert alert-danger">This field is required</p>}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="password">Contraseña:</label>
                        <input 
                         {...register("user_password",{
                             required:true,
                             maxLength:16,
                             minLength:8,
                             pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
                         } 
                         )}

                        type="password" 
                        id="password" 
                        name="user_password"
                        className="form-control personalizacion"                 
                        />
                          {errors?.user_password?.type==="required" && <p className="alert alert-danger">This field is required</p>}
                          {errors?.user_password?.type==="maxLength" && <p className="alert alert-danger">This field cannot exeed 16 characters</p>}
                          {errors?.user_password?.type==="minLength" && <p className="alert alert-danger">This field required almost 8</p>}
                          {errors?.user_password?.type==="pattern" && <p className="alert alert-danger">Este campo requiere una mayuscula, minuscula y caracter especial</p>}
                        <div id="passwordHelp" className="form-text">La contraseña debe tener de
                        8-16 caracteres con una mayuscula, un numero y un caracter especial</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="hobbies" id="textHobbies">Hobbies:</label>
                        <textarea 
                         {...register("userHobbies",{
                          
                        } 
                        )}
                        id="hobbies" name="userHobbies" className="form-control
                        personalizacionArea"></textarea>
                         
                    </div>

                    <div className="col-12">
                        <button className="btn btn-primary" id="boton_r">Registrarse</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export {FormRegister}