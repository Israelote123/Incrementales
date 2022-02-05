import { useState } from 'react';
import './AgregarHabilidad.css';
import { pushAbiliti } from '../../api/api';



function AgregarHabilidad() {
    let variable = localStorage.getItem("variable");

    const [loading, setLoading] = useState(false)


  const onSubmit = (event) => {
        event.preventDefault()
        let data = {
            mail: variable,
            skill: event.target[0].value         
        };

       setLoading(true)
        setTimeout(() => {
           
            pushAbiliti(data)
            setLoading(false)
            event.target.reset()
        }, 2000)             
       console.log(loading);
    }

    return (
         <form  onSubmit={onSubmit}>
                <div id="blue">
                    <h1>Nueva Habilidad</h1>
                </div>
                <div className="mb-3">
                    <label className="form-label">Habilidad</label>
                    <input required name='nombreC' type="text" className="form-control" /*onChange={nuevaHabilidad}*/ id="exampleInputEmail1" aria-describedby="emailHelp" />
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