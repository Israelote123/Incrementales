//obtener busqueda de ususarios
const getSearch = async (text) => {
  console.log(JSON.parse(window.localStorage.getItem("TOKEN")).token)
  return await fetch(`http://localhost:3001/busqueda/${text}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  }).then((res) => res.json());
};

//insertar nuevos cursos
const pushCourse = async (obtainData) => {
  return await fetch(`http://localhost:3001/cursos/`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(obtainData), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .then((json) => {
      alert(json);
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
};

//insertar habilidades
const pushAbiliti = async (data) => {
  return await fetch(`http://localhost:3001/habilidades/`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .then((json) => {
      alert(json);
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
};

//enviar consulta de problemas
const pushHelp = async (obtainData) => {
  return await fetch(`http://localhost:3001/help/`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(obtainData), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .then((json) => {
      alert(json);
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
};

const getCuorse = async (data) => {
  return await fetch(`http://localhost:3001/cursos/${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const getAbility = async (data) => {
  return await fetch(`http://localhost:3001/habilidades/${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//Funcion para listar posibles amigos
const getFriends = async (data) => {
  return await fetch(`http://localhost:3001/amigos/${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//registar nuevo ususario
const registers = async (newUser) => {
  console.log(newUser)
  var url = "http://localhost:3001/register";
  var urlPhoto =
    "https://api.imgbb.com/1/upload?key=8bf495d29a8eaf97bf28a9d4e52cea42";
                                        
  var formData = new FormData();
  let resultado;
  var fileField = document.querySelector("#profilePhoto");
  formData.append("image", fileField.files[0]);

  let obtainData = () => {
    return {
      mail: newUser.mail,
      name: newUser.nameUser,
      middle_name: newUser.middleNameUser,
      last_name: newUser.lastNameUser,
      city: newUser.userDirection,
      country: newUser.userCountry,
      birth_date: newUser.userBirth,
      academic_level: newUser.userStudies,
      lenguages: newUser.userLenguages,
      linkedIn: newUser.userLinkedIn,
      hobbies: newUser.userHobbies,
      password: newUser.user_password,
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
      .then((res) => res.json())
      .then((json) => {
        resultado = json;
      })

      .then(() => {
        if (resultado === "userAdded") {
          console.log("Success:", resultado);
          alert("User Added");
          window.location.href = "/";
        } else {
          alert(resultado.error);
          console.log("error: ", resultado.error);
          console.log(resultado);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  await fetch(urlPhoto, {
    mode: "cors",
    method: "POST",
    mimeType: "multipart/form-data",
    body: formData,
    data: formData,
  })
    .then((res) => res.json())
    .then((json) => {
      resultado = json;
    })
    .then(() => {
      return sendData();
    })
    .catch((error) => console.error("Error:", error));
};

//iniciar sesion
const inicioSesion = async (obtainData) => {
  let resultado;
  return await fetch("http://localhost:3001/login", {
    method: "POST", // or 'PUT'
    body: JSON.stringify(obtainData), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error));
};

//obtener notificaciones para mostrarlas en la nav
const getNotifications = async (data) => {
  return await fetch(`http://localhost:3001/request/${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//obtener personas que te han manadado solicitudes
const getPossibleFriend = async (data) => {
  return await fetch(`http://localhost:3001/amistad/${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

    //obtener personas que te han manadado solicitudes
  const discoverFriend = async (data) => {
    return await fetch(`http://localhost:3001/noamigos/${data}`, {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
       },
     })  
      .then((res) => res.json())  
      .catch((err) => console.log(err));
   };


//Checar login
const loginCheck = async (obtainData) => {
  return await fetch("http://localhost:3001/login/check", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${obtainData.token}`
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error));
};

//mandar solicitudes de amistad
const requestApi = async (data) => {
  return await fetch(`http://localhost:3001/request/`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .then((json) => {
      alert(json);
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
};

//Actualizar estatus 
const updateStatus = async (data) => {
  return await fetch(`http://localhost:3001/request/update`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .then((json) => {
      alert(json);
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
}

//feedback
const pushfeedback= async (data) => {
  return await fetch(`http://localhost:3001/feedback`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .then((json) => {
      alert(json);
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
}


   //obtener los diferentes feedback
   const feedbackGet = async (data) => {
    return await fetch(`http://localhost:3001/feedbackget/${data}`, {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
       },
     })  
      .then((res) => res.json())  
      .catch((err) => console.log(err));
   };


   //subir publicaciones a la abse de datos
/*const pushPublications = async (obtainData) => {
  return await fetch(`http://localhost:3001/publications/`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(obtainData), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .then((json) => {
      alert(json);
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
};*/


const pushPublications = async (data) => {
    var url = "http://localhost:3001/publications";
    var urlPhoto =
      "https://api.imgbb.com/1/upload?key=6c351fa09a4c04960e3bab815f559fdd";
                                          
    var formData = new FormData();
    let resultado={
      data:{
         url:""
      }
    }
    var fileField = document.querySelector("#file");
    formData.append("image", fileField.files[0]);


    let obtainData = () => {
      return {
        mail: data.mail,
        content: data.content,
        photos_post: resultado.data.url,
        likes: data.likes,
        comments: data.comments,
        heart: data.heart,
        break_heart: data.break_heart,
      };
    };
    
    let sendData = async () => {
      
      await fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(obtainData()), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
        },
      })
        .then((res) => res.json())
        .then((json) => {
          resultado = json;
          alert(resultado)
        })

        .catch((error) => console.error("Error:", error));
    };


    console.log("contar")
  
  if(document.querySelector("#file").value!="")
  {
    console.log("contenido")
    await fetch(urlPhoto, {
      mode: "cors",
      method: "POST",
      mimeType: "multipart/form-data",
      body: formData,
      data: formData,
    })
      .then((res) => res.json())
      .then((json) => {
        resultado = json;
      })
      .then(() => {
       
      })
      .catch((error) => console.error("Error:", error));
   
  }


  sendData()
   
   
  };



  //obtener publicaciones de un usuario
  const getPublicationsUser = async (data) => {
    return await fetch(`http://localhost:3001/publications/${data}`, {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
       },
     })  
      .then((res) => res.json())  
      .catch((err) => console.log(err));
   };

 //obtener todas las publicaciones
 const getPublicationsAll = async () => {
  return await fetch(`http://localhost:3001/publicationsall/`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
       "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
     },
   })  
    .then((res) => res.json())  
    .catch((err) => console.log(err));
 };

export {
  getPossibleFriend,
  getCuorse,
  getFriends,
  pushAbiliti,
  getAbility,
  pushHelp,
  getSearch,
  pushCourse,
  getNotifications,
  requestApi,
  discoverFriend,
  updateStatus,
  pushfeedback,
  feedbackGet,
  pushPublications,
  getPublicationsUser,
  getPublicationsAll,   
};

export { registers, inicioSesion, loginCheck };
