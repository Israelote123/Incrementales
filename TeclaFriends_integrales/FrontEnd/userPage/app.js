let variable = localStorage.getItem("variable");
console.log(variable);

var url = `http://localhost:3000/${variable}`;
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
                           <div class="userName">${resultado[0][0].name} ${resultado[0][0].middle_name} ${resultado[0][0].last_name}</div>
                           <div class="infoUser"> Direccion: ${resultado[0][0].country}, ${resultado[0][0].city}</div>
                           <div class="infoUser"> Lenguajes dominados: ${resultado[0][0].lenguages}</div>
                           <div class="infoUser"> LinkedIn: <a href="${resultado[0][0].linkedIn}"  id="linkedIn">${resultado[0][0].linkedIn}</a></div>
                           <div class="infoUser"> Hobbies: ${resultado[0][0].hobbies}</div>
                           <div class="infoUser"> Contacto: ${resultado[0][0].mail}</div></div>`
    })
    .catch((error) => {
      console.error("Error al solicitar los datos");
      document.getElementById("profile").innerHTML =
        "Conexion fallida ;-; unu :c";
    });
}
getData();
