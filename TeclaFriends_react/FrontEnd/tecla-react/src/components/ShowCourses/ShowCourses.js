//import './ShowCourses.css';
import { useState } from 'react';
import { getCuorse } from '../../api/api'
import { getAbility} from '../../api/api'
function ShowCourses() {
    const [save, setSave] = useState([]);
    const [state, setState] = useState(false);    
    const [abili, setAbili] = useState([]);  
    const mostrarCourses = async () => {
        //event.preventDefault()
        let newPokemon = await getCuorse("bob68@gmail.com")
        let pokeJSON = await newPokemon.json()
        setSave(save[0]=pokeJSON)      
        setState(true)
            
        mostrarAbilitis()
       
    }
    const mostrarAbilitis = async () => {
        //event.preventDefault()
        let newPokemon = await getAbility("bob68@gmail.com")
        let pokeJSON = await newPokemon.json()
        setAbili(abili[0]=pokeJSON)      
        //setState(true)
    }
    return (
        <div className="ShowCourses">
            <button className="btn btn-primary" onClick={mostrarCourses}>Mostrar</button>
            <br/>
            <br/>
            {state &&
                <>
                    <div className="row">
                    <h3 className="card-title">Cursos</h3> 
                        { save.map(r =>                                                                                                                                                       
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
                        }
                        <h3 className="card-title">Habilidades</h3>                                             
                        { abili.map(t =>                                                                                                                                                        
                          <div className="col-lg-6">                                                  
                            <div className="card">
                               <div className="card-body">
                                     <h5 className="card-title">{t.skill}</h5>
                                     <p className="card-text quote-text"><i>"{t.date}"</i></p>
                                </div>
                            </div>
                          </div>                                    
                         )
                        }
                    </div>
                </>
            }
        </div>
    );
}

export { ShowCourses };
