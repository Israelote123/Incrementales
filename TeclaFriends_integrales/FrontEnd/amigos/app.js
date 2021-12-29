const url = 'https://randomuser.me/api/';
let resultado;
function getFriends(i){
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            resultado = json;
        })
        .then(() => {
           document.getElementById(`amigo${i}`).innerHTML =`<img class="perfil" src='${resultado.results[0].picture.large}' alt="foto"> ${resultado.results[0].name.first} ,  ${resultado.results[0].location.country}`;
                
        })
        .catch(error => {
            console.error("Error al solicitar los datos")
            document.getElementById("profile").innerHTML = 'Conexion fallida ;-; unu :c';
        })
}

for (let i = 0; i < 12; i++) {
    getFriends(i);
    
}
