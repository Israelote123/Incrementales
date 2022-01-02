var A, B, C, D;
var s = "";

while (s.toLowerCase().localeCompare("salir")) {
    A = parseInt(prompt("Ingrese Primer numero"));
    B = parseInt(prompt("Ingrese Segundo numero"));
    while (A == B) {
        if (A == B) {
            alert("El segundo numero se repite, ingrese de nuevo segundo numero");
            B = parseInt(prompt("Ingrese Segundo numero"));
        }

    }
    C = parseInt(prompt("Ingrese Tercer numero"));

    while (A == C || B == C) {
        if (A == C || B == C) {
            alert("El tercer numero se repite, ingrese de nuevo tercer numero");
            C = parseInt(prompt("Ingrese tercer numero"));
        }
    }


    if (A < B) {
        D = A;
        A = B;
        B = D;
    }


    D = 0;
    if (B < C) {
        D = B;
        B = C;
        C = D;
    }
    D = 0
    if (A < B) {
        D = A;
        A = B;
        B = D;
    }

    console.log("El mayor numero de likes en su foto es:" + A);
    console.log("El menor numero de likes en su foto es: " + C);
    alert("El mayor numero de likes en su foto es: " + A+"\ny el menor numero de likes en su foto es: " + C)
    s = prompt("Si desea ingresar likes de otra foto ingrese 1 de lo contrario salir");
}


alert("Gracias por usar nuestra aplicacion")