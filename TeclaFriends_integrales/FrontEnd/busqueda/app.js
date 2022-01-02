
let variable=localStorage.getItem("variable2");



var url = `http://localhost:3000/${variable}`;
let resultado;

function getData(){
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            resultado = json;
        })
        .then(() => {
            //document.getElementById("photo").innerHTML = '<img class="logo" src="'+ resultado.results[0].picture.large +'" alt="foto">' + '<br>' + resultado.results[0].name.first + ' ' + resultado.results[0].name.last;
            document.getElementById("profile").innerHTML = 'Bienvenido a TeclaFriends: ' + resultado[0][0].name+" "+resultado[0][0].middle_name;//+ '<br>Telefono celular: ' + resultado.results[0].phone + '<br>Genero: ' + resultado.results[0].gender + '<br>Edad: ' + resultado.results[0].dob.age +'<br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat, rerum natus dolorum inventore ab quos facere quidem illo dolorem tempore eius porro deleniti, tempora, vel voluptates et velit veniam.';
            //document.getElementById("data").innerHTML = 'Fecha de registro: ' + resultado.results[0].registered.date;
        })
        .catch(error => {
            console.error("Error al solicitar los datos")
            document.getElementById("profile").innerHTML = 'Conexion fallida ;-; unu :c';
        })
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