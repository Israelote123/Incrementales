function calcular(friends,callBack)
{
       console.log("Hola Tecler")
       console.log("El numero de amigos que tienes es " + friends);
       callBack();
}

function refresh(){

    setTimeout(()=>
    {
        console.log("Hola callBack");
    },3500);

}

calcular(5,refresh);