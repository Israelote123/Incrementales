let registros = [];

// Objetos y clases//

class user{
    constructor(){

        this.realName = realName;
        this.username = username;
        this.country = country;
        this.number = number;
        this.studies = studies;
        this.directionHouse = directionHouse;
        this.userMail = userMail;
        this.birth = birth;
        this.password = password;
        this.abilities = abilities;
    }
}

function register(registros) {
    let nuevoRegistro = new user();
    let passwordVer = document.getElementById("passwordVerified").value;
    nuevoRegistro.realName = document.getElementById("realName").value;
    nuevoRegistro.username = document.getElementById("username").value;
    nuevoRegistro.country = document.getElementById("country").value;
    nuevoRegistro.number = document.getElementById("number").value;
    nuevoRegistro.studies = document.getElementById("studies").value;
    nuevoRegistro.directionHouse = document.getElementById("directionHouse").value;
    nuevoRegistro.userMail = document.getElementById("userMail").value;
    nuevoRegistro.birth = document.getElementById("birth").value;
    nuevoRegistro.abilities = document.getElementById("abilities").value;
    if(passwordVer.includes(document.getElementById("password").value)){
        nuevoRegistro.password = document.getElementById("passwordVerified").value;
        registros.push(nuevoRegistro)
    } else { 
        alert("Usuario no registrado, las contraseñas son diferentes");
    }
    document.getElementById("realName").value = "";
    document.getElementById("username").value = "";
    document.getElementById("country").value = "";
    document.getElementById("number").value = "";
    document.getElementById("studies").value = "";
    document.getElementById("directionHouse").value = "";
    document.getElementById("userMail").value = "";
    document.getElementById("birth").value = "";
    document.getElementById("abilities").value = "";
    document.getElementById("password").value = "";
    document.getElementById("passwordVerified").value = "";
    console.log(registros);
    return registros
        }

