var amigos=[];
var valor=0
var i=0;

alert("Ingrese el nombre de sus amigos, para poder ordenarlos alfabeticamente, podra agregar la cantidad de amigos que desee")

function agregar(){

    while(valor !='salir')
    {
       valor=prompt("Ingrese nombre el nombre de un amigo,\n si ya no tiene amigos que agregar ingrese salir")
       
       if(valor!='salir')
       {
           amigos[i]=valor;
           i++;
       }
    
    }
}

agregar();
amigos.sort();
console.log(amigos);