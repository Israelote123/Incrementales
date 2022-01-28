
//obtener busqueda de ususarios
const getSearch = async (text) =>{
    return await fetch(`http://localhost:3001/busqueda/${text}`)
    .then(res => res.json())
}

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

//insertat habilidades
const pushAbiliti = (obtainData) => {
    let resultado;
    fetch(`http://localhost:3001/habilidades/`, {
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

//enviar consulta de problemas
const pushHelp = (obtainData) => {
    let resultado;
    fetch(`http://localhost:3001/help/`, {
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
    let course = await fetch(`http://localhost:3001/cursos/${mail}`);
    return course
}

//obterner todos las habilidades
const getAbility = async (mail) =>{
    let pokemon = await fetch(`http://localhost:3001/habilidades/${mail}`);
    return pokemon
}

//Funcion para listar posibles amigos
const getFriends=async ()=>{
   let resultado =await fetch('http://localhost:3001/information');
   return resultado
}

//registar nuevo ususario
const register = async (newUser) => {
        var url = "http://localhost:3001/register";
    var urlPhoto = "https://api.imgbb.com/1/upload?key=8bf495d29a8eaf97bf28a9d4e52cea42";
    var formData = new FormData();
    let resultado;
    var fileField = document.querySelector("#profilePhoto");
    formData.append('image', fileField.files[0]);

    let obtainData = () => {
        return {
                mail: newUser[1].value,
                name: newUser[2].value,
                middle_name: newUser[3].value,
                last_name: newUser[4].value,
                city: newUser[6].value,
                country: newUser[5].value,
                birth_date: newUser[10].value,
                academic_level: newUser[8].value,
                lenguages: newUser[9].value,
                linkedIn: newUser[7].value,
                hobbies: newUser[12].value,
                password: newUser[11].value,
                profile_photo: resultado.data.url,
            };
        };

    let sendData = async () => {
    await fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(obtainData()), // data can be `string` or {object}!
        headers: {
        "Content-Type": "application/json",
        },
    })
        .then(res => res.json())
        .then(json => {
        resultado = json;
        })

        .then(() => {
        if (resultado === "userAdded") {
            console.log("Success:", resultado);
            alert("User Added");
            window.location.href = '/'
        } else {
            alert(resultado.error);
            console.log("error: ",resultado.error);
            console.log(resultado);
        }
        
        }).catch (error => console.error("Error:", error))
    };

    await fetch(urlPhoto, {
        mode: 'cors',
        method: "POST",
        mimeType: "multipart/form-data",
        body: formData,
        data: formData
    })
        .then(res => res.json())
        .then(json => {
        resultado = json;
        })
        .then(() => {
        return sendData();
        })
        .catch((error) => console.error("Error:", error));

}

//iniciar sesion
const inicioSesion = async (obtainData) => {
    return await fetch("http://localhost:3001/login", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(obtainData), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
  };

export { pushCourse, getCuorse, getFriends, pushAbiliti, getAbility, pushHelp, getSearch };

export{register,inicioSesion};