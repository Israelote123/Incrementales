const url = 'https://randomuser.me/api/';
let resultado;

function getUsuariosGit(){
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            resultado = json;
        })
        .then(() => {
            document.getElementById("photo").innerHTML = '<img class="logo" src="'+ resultado.results[0].picture.large +'" alt="foto">' + '<br>' + resultado.results[0].name.first + ' ' + resultado.results[0].name.last;
            document.getElementById("profile").innerHTML = 'Pais: ' + resultado.results[0].location.country + '<br>Telefono celular: ' + resultado.results[0].phone + '<br>Genero: ' + resultado.results[0].gender + '<br>Edad: ' + resultado.results[0].dob.age +'<br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat, rerum natus dolorum inventore ab quos facere quidem illo dolorem tempore eius porro deleniti, tempora, vel voluptates et velit veniam.';
            document.getElementById("data").innerHTML = 'Fecha de registro: ' + resultado.results[0].registered.date;
        })
        .catch(error => {
            console.log("Error al solicitar los datos")
        })
}

getUsuariosGit()

console.log(resultado)