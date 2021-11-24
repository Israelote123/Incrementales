var numeroFotos=3;
var totaLikes=0;
var likes=0;

for (let i = 0; i <numeroFotos; i++) {
    likes=parseInt(prompt("Ingrese el numero de likes de foto " +(i+1)))  
    totaLikes=totaLikes+likes;    
}

console.log("El total de likes de todas tus fotos es "+ totaLikes);