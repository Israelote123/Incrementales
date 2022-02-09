
import './AgregarHabilidad.css';
import { connect } from "react-redux";
import { saveAbility, setLoading} from "../../redux/actions/ability";
import { useLocalStorage } from '../../hooks/useLocalStorage'


const mapStateToProps = (state)=>{
    return{
      loading: state.abilitiReducer.loading,
      error: state.abilitiReducer.error,
    }
  }

function AgregarHabilidad({setLoading,saveAbility,loading,error}) {
    
  const [user]= useLocalStorage("USER",{})
 
  const onSubmit = (event) => {
        event.preventDefault()
        console.log(loading)
        let data = {
            mail: user.mail,
            skill: event.target[0].value         
        };
   
            saveAbility(data)
         
            event.target.reset()
      
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
