const url = 'https://randomuser.me/api/';
let resultado;
function getUsuariosGit(i){
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            resultado = json;
        })
        .then(() => {
           document.getElementById(`amigo${i}`).innerHTML ='<img class="perfil" src="'+resultado.results[0].picture.large +'" alt="foto">' +resultado.results[0].name.first +", "+ resultado.results[0].location.country;
                
        })
        .catch(error => {
            console.error("Error al solicitar los datos")
            document.getElementById("profile").innerHTML = 'Conexion fallida ;-; unu :c';
        })
}

for (let i = 0; i < 12; i++) {
    getUsuariosGit(i);
    
}
/*let variable=localStorage.getItem("variable");
console.log(variable);

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
getData();*/