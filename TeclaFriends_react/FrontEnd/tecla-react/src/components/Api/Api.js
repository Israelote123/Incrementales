//insertar nuevos cursos
const pushCourse = (obtainData) => {
    let resultado;
    fetch(`http://localhost:3001/cursos/`, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(obtainData()), // data can be `string` or {object}!
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then(json => {
            resultado = json;
        })
        .then(() => {
         alert(resultado)   
         console.log(resultado);

        })
        .catch(error => console.error("Error:", error))
};

//obterner todos los cursos para mostrar
const getCuorse = async (mail) =>{
    let pokemon = await fetch(`http://localhost:3001/cursos/${mail}`);
    return pokemon
}

//Funcion para listar posibles amigos
const getFriends=async ()=>{
   let resultado =await fetch('http://localhost:3001/information');
   return resultado
}

//Funcion para traer memes
const getMomos=async ()=>{
    let resultado =await fetch('https://meme-api.herokuapp.com/gimme');
    return resultado
 }

/*const getFriends = ()=> {
    fetch('http://localhost:3001/information')
        .then(response => response.json())
        .then(json => {
            resultado = json;
            console.log(resultado)
            return resultado
        })
        /*.then(() => {

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
}*/

export { pushCourse, getCuorse,getFriends,getMomos };