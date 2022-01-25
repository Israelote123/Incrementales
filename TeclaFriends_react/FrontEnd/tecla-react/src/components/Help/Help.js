import { useState } from 'react';
import './Help.css';
import { pushHelp } from '../../api/api';



function Help() {
    var data;
    let variable = localStorage.getItem("variable");
    
    let obtainData = () => {
        data = {
            mail: variable,
            titulo: state.titulo,
            consulta:state.consulta,
            problemas:state.problemas       
        };
        return data;
    };

    const [state, setState] = useState({ titulo: "",consulta: "",problemas: ""})
    const [save, setSave] = useState(false);
    const [loading, setLoading] = useState(false)

   const nuevoTitulo = (e) => {
        let newState = {
            ...state,
            titulo: e.target.value,
        }
        setState(newState)
    }
    const nuevaConsulta = (e) => {
        let newState = {
            ...state,
            consulta: e.target.value,
        }
        setState(newState)
    }
    const nuevosProblemas = (e) => {
        let newState = {
            ...state,
            problemas: e.target.value,
        }
        setState(newState)
    }

    const saveInfo = (event) => {
        event.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setSave(true)
            pushHelp(obtainData)
            setLoading(false)
            event.target.reset()
        }, 2000)
    }

    return (
        <div className="Habilidades">
            <form   onSubmit={saveInfo}>
                <div id="blue">
                    <h1>¿Necesitas ayuda?</h1>
                </div>
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input required name='nombreC' type="text" className="form-control" onChange={nuevoTitulo} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Consulta</label>
                    <input required name='nombreC' type="text" className="form-control" onChange={nuevaConsulta} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Problemas comunes</label>
                    <input required name='nombreC' type="text" className="form-control" onChange={nuevosProblemas} id="exampleInputEmail1" aria-describedby="emailHelp" />
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
            
        </div>
    );
}

export { Help };
