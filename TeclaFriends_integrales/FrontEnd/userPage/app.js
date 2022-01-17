let variable = localStorage.getItem("variable");
console.log(variable);

var url = `http://localhost:3001/${variable}`;
let resultado;
let profile = document.getElementById("profile");

function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      resultado = json;
    })
    .then(() => {
      profile.innerHTML = `<div class="container"><img src="${resultado[0][0].profile_photo}" id="userPhoto">
                           <div class="row">
                           <div class="userName">${resultado[0][0].name} ${resultado[0][0].middle_name} ${resultado[0][0].last_name}</div>
                           <div class="col-6 infoUser"> Contacto: ${resultado[0][0].mail}</div>
                           <div class="col-6 infoUser"> Lenguajes dominados: ${resultado[0][0].lenguages}</div>
                           <div class="col-12 infoUser"> LinkedIn: <a href="${resultado[0][0].linkedIn}"  id="linkedIn">${resultado[0][0].linkedIn}</a></div>
                           <div class="col-6 infoUser"> Direccion: ${resultado[0][0].country}, ${resultado[0][0].city}</div>
                           <div class="col-6 infoUser"> Hobbies: ${resultado[0][0].hobbies}</div></div></div>`
    })
    .catch((error) => {
      console.error("Error al solicitar los datos");
      document.getElementById("profile").innerHTML =
        "Conexion fallida ;-; unu :c";
    });
}
getData();

let result;
//let mylista = `<ul id="borrar">`
var para = [];
var direccionURL1 = [];
document.getElementById("icon-search").addEventListener("click", busqueda)
document.getElementById("inputSearch").addEventListener("click", limpiar)
document.getElementById("principal").addEventListener("click", limpiar)
document.getElementById("cuerpo_barra").addEventListener("click", limpiar)

function limpiar(){
    
document.getElementById('caja').innerHTML="";
}
function busqueda() {
    let mylista="";
    let variable = document.getElementById("inputSearch").value;
    var url = `http://localhost:3001/busqueda/${variable}`;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            result = json;
        })
            
        .then(() => {
            mylista = `<ul>`
            if(result[0]==false)
            {
                mylista +=`<li>No hay resultados</li>`;
            }
            else{
            for (let i = 0; i < result[0].length; i++) {
                mylista +=`<li><a onclick="enviar_variable('${result[0][i].mail}')" href="../busqueda/index.html">${result[0][i].name} ${result[0][i].middle_name} </a></li>`;
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

function enviar_variable(dato)
{
    localStorage.setItem("variable2",dato);
    console.log(dato);
}
