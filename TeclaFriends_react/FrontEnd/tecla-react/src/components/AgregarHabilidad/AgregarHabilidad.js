import { useState } from 'react';
import './AgregarHabilidad.css';
import { pushAbiliti } from '../../api/api';



function AgregarHabilidad() {
    var data;
    let obtainData = () => {
        data = {
            mail: "bob68@gmail.com",
            skill: state.nombreH           
        };
        return data;
    };



    const [state, setState] = useState({ nombreH: ""})

    const [save, setSave] = useState(false);
    const [loading, setLoading] = useState(false)

    const nuevaHabilidad = (e) => {

        let newState = {
            ...state,
            nombreH: e.target.value,
        }
        setState(newState)
    }

    const saveInfo = (event) => {
        event.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setSave(true)
            pushAbiliti(obtainData)
            setLoading(false)
            event.target.reset()
        }, 2000)             
       console.log(loading);
    }

    return (
         <form  onSubmit={saveInfo}>
                <div id="blue">
                    <h1>Nueva Habilidad</h1>
                </div>
                <div className="mb-3">
                    <label className="form-label">Habilidad</label>
                    <input required name='nombreC' type="text" className="form-control" onChange={nuevaHabilidad} id="exampleInputEmail1" aria-describedby="emailHelp" />
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
            
    
    );
}

export { AgregarHabilidad };