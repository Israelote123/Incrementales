let resultado;
function getFriends(i) {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => {
            resultado = json;
        })
        .then(() => {
            document.getElementById(`amigo${i}`).innerHTML = `<div class="backColor"><img id="perfil" src='${resultado.results[0].picture.large}' alt="foto"> ${resultado.results[0].name.first} ,  ${resultado.results[0].location.country}
                                                              <br><br><button>Agregar amigo</button></div>`;

        })
        .catch(error => {
            console.error("Error al solicitar los datos")
            document.getElementById("profile").innerHTML = 'Conexion fallida ;-; unu :c';
        })
}

for (let i = 0; i < 12; i++) {
    getFriends(i);

}

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
    var url = `http://localhost:3000/busqueda/${variable}`;

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





