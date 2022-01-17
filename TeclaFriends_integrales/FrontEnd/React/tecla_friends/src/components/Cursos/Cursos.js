import { useState } from 'react';
import './Cursos.css';
import {  pushCourse  } from '../Api/Api';



function Cursos() {
     var data;
     let obtainData = () => {
        data = {
          mail: "bob68@gmail.com",
          nombre_curso:state.nombreC,
          fecha_curso:state.fechaC,
          lugar_curso:state.lugarC
        }; 
        return data;
    };

    

    const [state, setState] = useState({nombreC:"",lugarC:"",fechaC:""})  
  
    const [save, setSave] = useState(false);

    const nombreCurso = (e) => {
         
        let newState = {
            ...state,
            nombreC: e.target.value, 
        }
        setState(newState)
    }
    const lugarCurso = (e) => {
        let newState = {
            ...state,
            lugarC: e.target.value, 
        }
        setState(newState)
    }
    const fechaCurso = (e) => {
        let newState = {
            ...state,
            fechaC: e.target.value, 
        }
        setState(newState)
    }
    const saveInfo = () => {
        setSave(true)
        pushCourse (obtainData)
    }

    
    const showCourses = async () =>{

        let newPokemon =  await getPokemon("bob68@gmail.com")
        let pokeJSON = await newPokemon.json()

        
    }

    return (
        <div className="Cursos">
            <form>
                <div id="blue">
                    <h1>Nuevo curso</h1>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nombre curso</label>
                    <input name='nombreC' type="text" className="form-control" onChange={nombreCurso} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Lugar curso</label>
                    <input name='lugarC' type="text" className="form-control" onChange={lugarCurso} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Fecha curso</label>
                    <input name='lugarC' type="date" className="form-control" onChange={fechaCurso} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type='button' className="btn btn-primary" onClick={saveInfo}>Save</button>
            </form>

           
            <div>
                
            </div>

            {save &&
                <>
                    <div className='container'>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <h2>Nombre curso</h2>
                                    <br />
                                    <h3>{state.nombreC}</h3>
                                    
                                    
                                </li>
                                <li className="list-group-item">
                                    <h2>Lugar curso</h2>
                                    <br />
                                    <h3>{state.lugarC}</h3></li>
                                <li className="list-group-item">
                                    <h2>Fecha curso</h2>
                                    <br />
                                    <h3>{state.fechaC}</h3></li>
                            </ul>
                        </div>
                    </div>
                </>

            }


        </div>
    );
}

export { Cursos };