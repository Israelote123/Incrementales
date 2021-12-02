var amigos=9;

function calcular(num1,callBack)
{
       console.log("Hola tecler")
       console.log("El numero de amigos que tienes es" +num1);
       callBack();
}

function refresh(){

    setTimeout(function()
    {
        console.log("Hola, callBack");
    },3500);

}

calcular(5,refresh);