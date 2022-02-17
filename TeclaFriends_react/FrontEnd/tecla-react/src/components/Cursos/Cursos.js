
import './Cursos.css';
import { connect } from "react-redux";
import { saveCourse,setLoading } from "../../redux/actions/curso";
import { useLocalStorage } from '../../hooks/useLocalStorage'
import{useForm} from 'react-hook-form'

const mapStateToProps = (state)=>{
    return{
      loading: state.courseReducer.loading,
      error: state.courseReducer.error,
    }
  }

function Cursos({saveCourse,setLoading,loading,error}) {

    const {
        register,
        handleSubmit,
        watch,
        formState:{errors},
        } = useForm() 
    
    const [user]= useLocalStorage("USER",{})

    const onSubmit= (payload) => {
         
        let data = {
            mail: user.mail,
            nombre_curso: payload.nombre_curso,
            lugar_curso: payload.lugar_curso,
            fecha_curso: payload.fecha_curso,
        };
        saveCourse(data)          
    }

    return (
          <form  onSubmit={handleSubmit( onSubmit)}>
                <div id="blue">
                    <h1>Nuevo curso</h1>
                </div>

                <div className="mb-3">
                    <label htmlFor='NombreCourse' className="form-label">Nombre curso</label>
                    <input 
                    {...register("nombre_curso",{
                        required:true,
                      
                    } 
                    )} 
                    name='nombre_curso' type="text" className="form-control"  id="NombreCourse" aria-describedby="emailHelp" />
                    {errors?.nombre_curso?.type==="required" && <p className="alert alert-danger">This field is required</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor='placeCourse' className="form-label">Lugar curso</label>
                    <input 
                     {...register("lugar_curso",{
                        required:true,
                      
                    } 
                    )} 
                    name='lugar_curso' type="text" className="form-control" id="placeCourse" aria-describedby="emailHelp" />
                    {errors?.lugar_curso?.type==="required" && <p className="alert alert-danger">This field is required</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor='dateCourse' className="form-label">Fecha curso</label>
                    <input 
                       {...register("fecha_curso",{
                        required:true,
                      
                    } 
                    )} 
                    name='fecha_curso' type="date" className="form-control" id="dateCourse" aria-describedby="emailHelp" />
                    {errors?.fecha_curso?.type==="required" && <p className="alert alert-danger">This field is required</p>}
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

