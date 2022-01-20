import './FormRegister.css'

function FormRegister(){
    return  (
        <main>
            <div className="container register">
                <form className="row g-3" id="registerForm"
                onsubmit="event.preventDefault();">
                    <div className="col-12">
                        <img src="../img/default.png" id="userPhoto" alt="foto_default" /> <br />
                        <input type="file" id="profilePhoto" name="userPhoto"
                        className="form-control" accept="image/*" />
                        <label for="profilePhoto" className="textProfilePhoto">Foto de perfil</label>
                    </div>
                    <div className="col-md-6">
                        <label for="email">Correo electronico:</label>
                        <input type="mail" id="email" name="userMail"
                        placeholder="user@mail.com" className="form-control personalizacion" />
                    </div>
                    <div className="col-md-6">
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="nameUser" placeholder="José"
                        className="form-control personalizacion" />
                    </div>
                    <div className="col-md-6">
                        <label for="name">Apellido paterno:</label>
                        <input type="text" id="middleName" name="middleNameUser"
                        placeholder="Martinez" className="form-control personalizacion" />
                    </div>
                    <div className="col-md-6">
                        <label for="name">Apellido materno:</label>
                        <input type="text" id="lastName" name="lastNameUser"
                        placeholder="Suarez" className="form-control personalizacion" />
                    </div>
                    <div className="col-md-6">
                        <label for="country">Pais:</label>
                        <input type="text" id="country" name="userCountry"
                        placeholder="México" className="form-control personalizacion" />
                    </div>
                    <div className="col-md-6">
                        <label for="direction">Ciudad:</label>
                        <input type="text" id="direction" name="userDirection"
                        placeholder="Cd. de México" className="form-control personalizacion" />
                    </div>
                    <div className="col-md-6">
                        <label for="number">Link de perfil LinkedIn:</label>
                        <input type="tel" id="number" name="userLinkedIn"
                        className="form-control personalizacion" />
                    </div>
                    <div className="col-md-6">
                        <label for="studies">Estudios:</label>
                        <input type="text" id="studies" name="userStudies"
                        placeholder="Memes" className="form-control personalizacion" /> 
                    </div>
                    <div className="col-md-6">
                        <label for="lenguages">Lenguajes dominados:</label>
                        <input type="text" id="lenguages" name="userLenguages"
                        placeholder="Español" className="form-control personalizacion" />
                    </div>
                    <div className="col-md-6">
                        <label for="birth">Fecha de nacimiento:</label>
                        <input type="date" id="birth" name="userBirth" className="form-control
                        personalizacion"  />
                    </div>
                    <div className="col-md-6">
                        <label for="password">Contraseña:</label>
                        <input type="password" id="password" name="user_password"
                        maxlength="16" minlength="8" className="form-control personalizacion" />
                        <div id="passwordHelp" className="form-text">La contraseña debe tener de
                        8-16 caracteres con una mayuscula y un numero</div>
                    </div>
                    <div className="col-12">
                        <label for="hobbies" id="textHobbies">Hobbies:</label>
                        <textarea id="hobbies" name="userHobbies" className="form-control
                        personalizacionArea"></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" id="boton_r" onclick="submitPhotoUser()">Registrarse</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export {FormRegister}