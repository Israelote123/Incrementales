
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

export { pushCourse };