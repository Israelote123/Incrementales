
//import './Nav.css';
import { useState } from 'react';
import { getCuorse } from '../Api/ApiMostrarCurso'

function ShowCourses() {
    
    const [save, setSave] = useState([]);
    const [state, setState] = useState(false);
    

    const mostrarCourses = async () => {
        event.preventDefault()
        let newPokemon = await getCuorse("bob68@gmail.com")
        let pokeJSON = await newPokemon.json()

        setSave(save[0] = pokeJSON)
        console.log(pokeJSON)
        console.log(save)
        setState(true)
    }



    return (
        <div className="ShowCourses">

            <button className="btn btn-primary" onClick={mostrarCourses}>Mostrar</button>
            <br/>
            <br/>
            
            {state &&
                <>
                    <div className="row">
                        { save.map(t =>                            
                             t.map(r =>                                                                                                    
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">{r.nombre_curso}</h5>
                                                    <p className="card-text quote-text"><i>"{r.lugar_curso}"</i></p>
                                                    <p className="card-text quote-text"><i>"{r.fecha_curso}"</i></p>
                                                </div>
                                            </div>
                                        </div>                                    
                             )
                            )
                        }

                    </div>



                </>
            }
        </div>
    );
}

export { ShowCourses };