var url = "http://localhost:3000/login";
var data;
let resultado;

let obtainData = () => {
  data = {
    mail: document.querySelector('[name="user_mail"]').value,
    password: document.querySelector('[name="user_password"]').value,
  };

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
      console.log("Success:", resultado);
      console.log(`inicio de sesión exitoso, bienvenido ${resultado[0][0].name}`)
    })
    .catch(error => console.error("Error:", error))
};
