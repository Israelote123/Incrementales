
import './AgregarHabilidad.css';
import { connect } from "react-redux";
import { saveAbility, setLoading} from "../../redux/actions/ability";
import { useLocalStorage } from '../../hooks/useLocalStorage'
import{useForm} from 'react-hook-form'


const mapStateToProps = (state)=>{
    return{
      loading: state.abilitiReducer.loading,
      error: state.abilitiReducer.error,
    }
  }

function AgregarHabilidad({setLoading,saveAbility,loading,error}) {

  const {
    register,
    handleSubmit,
    watch,
    formState:{errors},
    } = useForm() 
    
  const [user]= useLocalStorage("USER",{})
 
  const onSubmit = (payload) => {
        
       
        let data = {
            mail: user.mail,
            skill: payload.habilidad         
        };
   
            saveAbility(data)
         
            
      
    }

    return (
         <form  onSubmit={handleSubmit(onSubmit)}>
                <div id="blue">
                    <h1>Nueva Habilidad</h1>
                </div>

                <div className="mb-3">
                    <label htmlFor='abiliti' className="form-label">Habilidad</label>
                    <input 
                     {...register("habilidad",{
                        required:true,
                      
                    } 
                    )} 
                     name='habilidad' type="text" className="form-control"  id="abiliti" aria-describedby="emailHelp" />
                     {errors?.habilidad?.type==="required" && <p className="alert alert-danger">This field is required</p>}
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

export default connect(mapStateToProps, {saveAbility,setLoading} )(AgregarHabilidad);
