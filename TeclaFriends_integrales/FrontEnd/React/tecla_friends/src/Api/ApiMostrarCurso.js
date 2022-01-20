const getCuorse = async (mail) =>{
    let pokemon = await fetch(`http://localhost:3001/cursos/${mail}`);
    return pokemon
}

export {getCuorse};