import { useState } from 'react';
import './Cursos.css';
import { pushCourse } from '../../api/api';



function Cursos() {
    var data;
    let obtainData = () => {
        data = {
            mail: "bob68@gmail.com",
            nombre_curso: state.nombreC,
            fecha_curso: state.fechaC,
            lugar_curso: state.lugarC
        };
        return data;
    };



    const [state, setState] = useState({ nombreC: "", lugarC: "", fechaC: "" })

    const [save, setSave] = useState(false);
    const [loading, setLoading] = useState(false)

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
   
    const saveInfo = (event) => {

        event.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setSave(true)
            pushCourse(obtainData)
            setLoading(false)
            event.target.reset()
        }, 2000)
             
       console.log(loading);
    }




    return (
        <div className="Cursos">
            <form  onSubmit={saveInfo}>
                <div id="blue">
                    <h1>Nuevo curso</h1>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre curso</label>
                    <input required name='nombreC' type="text" className="form-control" onChange={nombreCurso} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Lugar curso</label>
                    <input required name='lugarC' type="text" className="form-control" onChange={lugarCurso} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha curso</label>
                    <input required name='lugarC' type="date" className="form-control" onChange={fechaCurso} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                {!loading && (
                    <button  className="btn btn-primary" >Save</button>

                )}


                {loading && (
                    <div className="text-center">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}

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