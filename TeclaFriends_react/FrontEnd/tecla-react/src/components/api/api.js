function login(){
    var url = "http://localhost:3000/login";
    var data;
    let resultado;
    localStorage.setItem("variable3",3);

    let obtainData = () => {
    data = {
        mail: document.querySelector('[name="user_mail"]').value,
        password: document.querySelector('[name="user_password"]').value,
    };
    let variable=document.querySelector('[name="user_mail"]').value;
    localStorage.setItem("variable",variable);
    return data;
    };

    let inicioSesion = () => {
    fetch(url, {
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
        if (resultado=="Contraseña erronea"||resultado=="Usuario no encontrado") {
            alert(resultado);
        }
        else {
            console.log("Success:", resultado);
            console.log(`inicio de sesión exitoso, bienvenido ${resultado[0][0].name}`)
            location.href = './chismeTecla/index.html';
        }
        
        })
        .catch(error => console.error("Error:", error))
    };
}

function register(){
    var url = "http://localhost:3000/register";
    var urlPhoto = "https://api.imgbb.com/1/upload?key=8bf495d29a8eaf97bf28a9d4e52cea42";
    var data;
    var userPhotoLink;

    let obtainData = () => {
    data = {
        mail: document.querySelector('[name="userMail"]').value,
        name: document.querySelector('[name="nameUser"]').value,
        middle_name: document.querySelector('[name="middleNameUser"]').value,
        last_name: document.querySelector('[name="lastNameUser"]').value,
        city: document.querySelector('[name="userDirection"]').value,
        country: document.querySelector('[name="userCountry"]').value,
        birth_date: document.querySelector('[name="userBirth"]').value,
        academic_level: document.querySelector('[name="userStudies"]').value,
        lenguages: document.querySelector('[name="userLenguages"]').value,
        linkedIn: document.querySelector('[name="userLinkedIn"]').value,
        hobbies: document.querySelector('[name="userHobbies"]').value,
        password: document.querySelector('[name="user_password"]').value,
        profile_photo: resultado.data.url,
    };

    return data;
    };

    let submitPhotoUser = () => {
    var formData = new FormData();
    var fileField = document.querySelector("#profilePhoto");
    formData.append('image', fileField.files[0]);
    fetch(urlPhoto, {
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
        userPhotoLink = resultado.data.url
        sendData();
        })
        .catch((error) => console.error("Error:", error));
    };


    let sendData = () => {
    fetch(url, {
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
        if (resultado == "userAdded") {
            console.log("Success:", resultado);
            alert("User Added");
            location.href = "../index.html";
        } else {
            alert(resultado.error);
            console.log("error: ",resultado.error);
            console.log(resultado);
        }
        }).catch (error => console.error("Error:", error))
    };
}

export {login}
export {register}