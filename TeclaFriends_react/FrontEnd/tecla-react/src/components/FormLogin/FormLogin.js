function FormLogin(){
    return  (<main>
            <div class="container login">
                <div class="row">
                    <div class="col-lg">
                        <form class="col" onsubmit="event.preventDefault();">
                            <div class="form-floating">
                                <input type="email" class="form-control text"
                                    name="user_mail"
                                    placeholder="user@mail.com" />
                                <label for="floatingInput mail">Correo
                                    electrónico:</label><br />
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control text"
                                    id="password" name="user_password"
                                    placeholder="Password" />
                                <label for="floatingPassword password">Contraseña:</label>
                            </div>
                            <button class="btn btn-primary mb-3"
                                id="style-button" onclick="inicioSesion()">Iniciar
                                sesión</button>
                            <a class="btn btn-primary mb-3" id="style-button2">¿Olvidaste
                                tu contraseña?</a>
                            <a href="./register/index.html" class="btn
                                btn-primary" id="style-button3">¿No tienes
                                cuenta? Registrate</a>
                        </form>
                    </div>
                </div>
            </div>
        </main>)
}