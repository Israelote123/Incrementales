import './AmigosAgregar.css';
import { useState } from 'react';
import { getFriends } from '../../api/api'

function AmigosAgregar() {
    const [save, setSave] = useState([]);
    const [state, setState] = useState(true);

    const traerAmigos =async () => {
        let newPokemon = await getFriends()
        let pokeJSON = await newPokemon.json()
        
        
        setSave(save[0] = pokeJSON)
        console.log(pokeJSON)
        console.log(save)
        setState(false)
    }

    {state&&
        traerAmigos()
    }   
    return (
        <div>
         {
           save.map(r =>                                                                                                                                             
                  <div className="card">
                        <div className="card-body">

                          <img src={r.profile_photo} className="perfil card-img-top " alt="..."/>
                          <div className="card-body">
                             <h5 className="card-title">{r.name}</h5>
                             <h5 className="card-title">{r.middle_name}</h5>
                             <p className="card-text">{r.country}</p>
                             <a href="#" className="btn btn-info" >add user</a>
                          </div>
                       </div>
                    </div>                                    
                  )
          }     
        </div>  
    );
}
export { AmigosAgregar };

/*let variable = localStorage.getItem("variable");
let resultado;
let agregar = "";
let color;

let result;
var para = [];
var direccionURL1 = [];

//Funcion para listar posibles amigos
function getFriends() {
    fetch('http://localhost:3001/information')
        .then(response => response.json())
        .then(json => {
            resultado = json;
        })
        .then(() => {

            for (let i = 0; i < resultado[0].length; i++) {
                if (variable != resultado[0][i].mail) {
                    agregar += ` <div class="card "  style="width:40%">
                          <img src='${resultado[0][i].profile_photo}' class="perfil card-img-top " alt="...">
                          <div class="card-body">
                          <h5 class="card-title">${resultado[0][i].name}</h5>
                          <h5 class="card-title">${resultado[0][i].middle_name}</h5>
                          <p class="card-text">${resultado[0][i].country}</p>
                          <a href="#" class="btn btn-info" >add user</a>
                         </div>
                         </div>`
                }
                else{
                    document.getElementById('sesion').innerHTML =`<img src='${resultado[0][i].profile_photo}'  class="perfilUser" alt="..."></img>`;
                }
            }
            document.getElementById('container-friends').innerHTML = agregar;
        })
        .catch(error => {
            console.error("Error al solicitar los datos")

        })
}
getFriends();



//eventos para mostrar contenedor de busqueda
document.getElementById("icon-search").addEventListener("click", busqueda)
document.getElementById("inputSearch").addEventListener("click", limpiar)
document.getElementById("principal").addEventListener("click", limpiar)
document.getElementById("cuerpo_barra").addEventListener("click", limpiar)

//ir a login
document.getElementById("icon-close").addEventListener("click", inicio);

function inicio() {
    location.href = "../index.html";
}



function limpiar() {
    document.getElementById('caja').innerHTML = "";
}

//funcion para litar resulatdos de busqueda
function busqueda() {

    let mylista = "";
    let variable = document.getElementById("inputSearch").value;
    fetch(`http://localhost:3001/busqueda/${variable}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            result = json;
        })

        .then(() => {
            mylista = `<ul>`
            if (result[0] == false) {
                mylista += `<li>No hay resultados</li>`;
            }
            else {
                for (let i = 0; i < result[0].length; i++) {
                    mylista += `<li><a onclick="enviar_variable('${result[0][i].mail}')" href="../busqueda/index.html">${result[0][i].name} ${result[0][i].middle_name} </a></li>`;
                }
            }
            mylista += "</ul>"
            document.getElementById('caja').innerHTML = mylista;
        })
        .catch(error => {
            console.error("Error al solicitar los datos")
            alert('Conexion fallida ;-; unu :c');//document.getElementById("profile").innerHTML = 'Conexion fallida ;-; unu :c';
        })
}

//envia dato de usuario escogido en lista de busqueda
function enviar_variable(dato) {
    localStorage.setItem("variable2", dato);
    console.log(dato);
}


document.getElementById("icon-message").addEventListener("click", busqueda2)

//funcion para litar resulatdos de busqueda
function busqueda2() {

    let mylista = "";
    let variable = document.getElementById("inputMessage").value;
    fetch(`http://localhost:3001/busqueda/${variable}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            result = json;
        })

        .then(() => {
            mylista = `<ul>`
            if (result[0] == false) {
                mylista += `<li>No hay resultados</li>`;
            }
            else {
                for (let i = 0; i < result[0].length; i++) {
                    mylista += `<li><a  href="#">${result[0][i].name} ${result[0][i].middle_name} </a></li>`;
                }
            }
            mylista += "</ul>"
            document.getElementById("message-container").innerHTML = mylista;
        })
        .catch(error => {
            console.error("Error al solicitar los datos")
            alert('Conexion fallida ;-; unu :c');//document.getElementById("profile").innerHTML = 'Conexion fallida ;-; unu :c';
        })
}*/