const url2 = 'https://meme-api.herokuapp.com/gimme'
let resultado;
let imagen;
var para=[];
var comparacion;
let variable=localStorage.getItem("variable");
console.log(variable);
console.log("hola")
function getMemes(i) {
    fetch(url2)
        .then(response => response.json())
        .then(json => {
          
            resultado = json;
        })

        .then(() => {
            if(comparacion!=resultado.url)
            {
                comparacion=resultado.url
                let att = document.createAttribute("class");       // Create a "class" attribute
                att.value = "democlass";                           // Set the value of the class attribute
                para[i] = document.createElement('div');
                para[i].setAttributeNode(att); 
                para[i].innerHTML = `<br> <img class="meme" src='${resultado.url}' alt="foto">  <br>`;
                document.body.appendChild(para[i]); 
            }
         })
        .catch(error => {
            console.error("Error al solicitar los datos")
            document.getElementById("profile").innerHTML = 'Conexion fallida ;-; unu :c';
        })
}

for (let i = 0; i < 200; i++) {
      getMemes(i);
}

