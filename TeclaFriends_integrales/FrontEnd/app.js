var url = "http://localhost:3001/login";
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


//localStorage.setItem("variable",variable);

