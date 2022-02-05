//import { useState } from 'react';
import './Cursos.css';
import { pushCourse } from '../../api/api';
import { connect } from "react-redux";
import { saveCourse } from "../../redux/actions/curso";

const mapStateToProps = (state)=>{
    return{
      loading: state.courseReducer.loading,
      error: state.courseReducer.error,
    }
  }

function Cursos({saveCourse,loading,error}) {
    
    const variable = localStorage.getItem("variable");
   // const [loading, setLoading] = useState(false)
   
    const onSubmit= (event) => {
        event.preventDefault() 
        let data = {
            mail: variable,
            nombre_curso: event.target[0].value,
            lugar_curso: event.target[1].value,
            fecha_curso: event.target[2].value,
        };

        //setLoading(true)
        setTimeout(() => {
            saveCourse(data)
            //pushCourse(data)
            //setLoading(false)
            event.target.reset()
        }, 2000)

    }

    return (
          <form  onSubmit={onSubmit}>
                <div id="blue">
                    <h1>Nuevo curso</h1>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre curso</label>
                    <input required name='nombreC' type="text" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Lugar curso</label>
                    <input required name='lugarC' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha curso</label>
                    <input required name='lugarC' type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
                {error && (
                  <div className="alert alert-danger" role="alert">
                     No es posible conectar con la base de datos
                   </div>
                )}

            </form>

        
    );
}

export default connect(mapStateToProps, {saveCourse} )(Cursos);

//export { Cursos };