
import './Cursos.css';
import { connect } from "react-redux";
import { saveCourse,setLoading } from "../../redux/actions/curso";
import { useLocalStorage } from '../../hooks/useLocalStorage'

const mapStateToProps = (state)=>{
    return{
      loading: state.courseReducer.loading,
      error: state.courseReducer.error,
    }
  }

function Cursos({saveCourse,setLoading,loading,error}) {
    
    const [user]= useLocalStorage("USER",{})

    const onSubmit= (event) => {
        event.preventDefault() 
        let data = {
            mail: user.mail,
            nombre_curso: event.target[0].value,
            lugar_curso: event.target[1].value,
            fecha_curso: event.target[2].value,
        };

       
            saveCourse(data)
            event.target.reset()
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
             
                    <button  className="btn btn-primary" >Save</button>

           


               
                {error && (
                  <div className="alert alert-danger" role="alert">
                     No es posible conectar con la base de datos
                   </div>
                )}

            </form>

        
    );
}

export default connect(mapStateToProps, {saveCourse,setLoading} )(Cursos);

